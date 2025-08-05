"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { useSetupMfa, useVerifyMfaSetup } from "@/hooks/useAuthApi";
import { useToast } from "@/hooks/use-toast";
import { OtpInput } from "@/components/ui/OtpInput";

interface MfaSetupProps {
  onSetupComplete: () => void;
  onCancel: () => void;
}

export const MfaSetup: React.FC<MfaSetupProps> = ({
  onSetupComplete,
  onCancel,
}) => {
  const [step, setStep] = useState<"loading" | "setup" | "verify">("loading");
  const [qrCode, setQrCode] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { toast } = useToast();
  const setupMfaMutation = useSetupMfa();
  const verifyMfaSetupMutation = useVerifyMfaSetup();

  useEffect(() => {
    // Initialize MFA setup when component mounts
    setupMfaMutation.mutate(undefined, {
      onSuccess: (response) => {
        if (response.status === "success" && response.data) {
          setQrCode(response.data.qrCode);
          setSecret(response.data.secret);
          setStep("setup");
        } else {
          setError(response.message || "Failed to initialize MFA setup");
        }
      },
      onError: (err: any) => {
        setError(err?.message || "Failed to initialize MFA setup");
      },
    });
  }, []);

  const handleVerifySetup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode.length !== 6) return;

    setError("");
    verifyMfaSetupMutation.mutate(
      { token: verificationCode },
      {
        onSuccess: (response) => {
          if (response.status === "success" && response.data) {
            toast({
              title: "MFA Setup Complete",
              description:
                response.data.message ||
                "Two-factor authentication has been successfully enabled.",
            });
            onSetupComplete();
          } else {
            setError(response.message || "Invalid verification code");
          }
        },
        onError: (err: any) => {
          setError(err?.message || "Invalid verification code");
        },
      },
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "Text copied to clipboard",
    });
  };

  if (step === "loading") {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardBody className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Setting up MFA...</p>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <h3 className="text-lg font-semibold">
          Set Up Two-Factor Authentication
        </h3>
        <p className="text-sm text-gray-600">
          Scan the QR code with your authenticator app or enter the setup key
          manually
        </p>
      </CardHeader>
      <CardBody className="space-y-6">
        {/* QR Code */}
        <div className="text-center">
          <div className="bg-white p-4 rounded-lg border inline-block">
            <img alt="MFA QR Code" className="w-48 h-48 mx-auto" src={qrCode} />
          </div>
        </div>

        {/* Setup Key */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Setup Key (Manual Entry)
          </label>
          <div className="flex items-center space-x-2">
            <Input
              readOnly
              className="flex-1 font-mono text-sm"
              size="sm"
              value={secret}
            />
            <Button
              color="primary"
              size="sm"
              variant="flat"
              onClick={() => copyToClipboard(secret)}
            >
              Copy
            </Button>
          </div>
          <p className="text-xs text-gray-500">
            Enter this key in your authenticator app if you can't scan the QR
            code
          </p>
        </div>

        <Divider />

        {/* Verification */}
        <form className="space-y-4" onSubmit={handleVerifySetup}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Verification Code
            </label>
            <OtpInput
              disabled={verifyMfaSetupMutation.isPending}
              error={!!error}
              errorMessage={error}
              value={verificationCode}
              onChange={setVerificationCode}
            />
            <p className="text-xs text-gray-500">
              Enter the 6-digit code from your authenticator app
            </p>
          </div>

          <div className="flex space-x-3">
            <Button
              className="flex-1"
              color="default"
              disabled={verifyMfaSetupMutation.isPending}
              type="button"
              variant="flat"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              className="flex-1"
              color="primary"
              disabled={
                verificationCode.length !== 6 ||
                verifyMfaSetupMutation.isPending
              }
              isLoading={verifyMfaSetupMutation.isPending}
              type="submit"
            >
              Verify & Enable
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};
