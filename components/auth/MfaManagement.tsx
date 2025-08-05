"use client";

import React, { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Switch } from "@heroui/switch";
import { Divider } from "@heroui/divider";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";

import { MfaSetup } from "./MfaSetup";

import { useMfaStatus, useDisableMfa } from "@/hooks/useAuthApi";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

interface MfaManagementProps {
  className?: string;
}

export const MfaManagement: React.FC<MfaManagementProps> = ({ className }) => {
  const [showSetup, setShowSetup] = useState(false);
  const [showDisableModal, setShowDisableModal] = useState(false);

  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  const {
    data: mfaStatusData,
    isLoading: isLoadingStatus,
    refetch,
    error,
  } = useMfaStatus();
  const disableMfaMutation = useDisableMfa();

  const mfaStatus = mfaStatusData?.data;
  const isEnabled = mfaStatus?.mfaEnabled || false;

  const handleToggleMfa = (enabled: boolean) => {
    if (enabled) {
      // Enable MFA - show setup modal
      setShowSetup(true);
    } else {
      // Disable MFA - show confirmation modal
      setShowDisableModal(true);
    }
  };

  const handleDisableMfa = () => {
    disableMfaMutation.mutate(undefined, {
      onSuccess: (response) => {
        if (response.status === "success") {
          toast({
            title: "MFA Disabled",
            description: "Two-factor authentication has been disabled.",
          });
          refetch(); // Refresh the MFA status
          setShowDisableModal(false);
        } else {
          toast({
            title: "Error",
            description: response.message || "Failed to disable MFA",
          });
        }
      },
      onError: (err: any) => {
        toast({
          title: "Error",
          description: err?.message || "Failed to disable MFA",
        });
      },
    });
  };

  const handleSetupComplete = () => {
    setShowSetup(false);
    refetch(); // Refresh the MFA status
  };

  const handleSetupCancel = () => {
    setShowSetup(false);
  };

  if (isLoadingStatus) {
    return (
      <Card className={className}>
        <CardBody className="text-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading MFA status...</p>
        </CardBody>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={className}>
        <CardBody className="text-center py-8">
          <div className="text-red-600 mb-4">⚠️ Error loading MFA status</div>
          <p className="text-gray-600 mb-4">
            {error?.message || "Failed to load MFA status"}
          </p>
          <Button
            color="primary"
            size="sm"
            variant="flat"
            onClick={() => refetch()}
          >
            Retry
          </Button>
        </CardBody>
      </Card>
    );
  }

  return (
    <>
      <Card className={className}>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-600">
              Add an extra layer of security to your account
            </p>
          </div>
          <Switch
            color="primary"
            disabled={disableMfaMutation.isPending}
            isSelected={isEnabled}
            onValueChange={handleToggleMfa}
          />
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">
                Status: {isEnabled ? "Enabled" : "Disabled"}
              </p>
              <p className="text-sm text-gray-600">
                {isEnabled
                  ? "Your account is protected with two-factor authentication"
                  : "Enable MFA to secure your account with a second verification step"}
              </p>
            </div>
            <div className="flex items-center">
              <div
                className={`w-3 h-3 rounded-full ${isEnabled ? "bg-green-500" : "bg-gray-400"}`}
              />
            </div>
          </div>

          {isEnabled && (
            <>
              <Divider />
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Additional Options</h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Backup Codes</span>
                  <span className="text-sm">
                    {mfaStatus?.hasBackupCodes ? "Available" : "Not available"}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  If you lose access to your authenticator app, you can use
                  backup codes to sign in.
                </p>
              </div>
            </>
          )}

          <Divider />

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-sm mb-2">
              About Two-Factor Authentication
            </h4>
            <p className="text-xs text-gray-600">
              When enabled, you'll need to enter a code from your authenticator
              app (like Google Authenticator, Authy, or Microsoft Authenticator)
              in addition to your password when signing in.
            </p>
          </div>
        </CardBody>
      </Card>

      {/* MFA Setup Modal */}
      <Modal
        backdrop="opaque"
        classNames={{
          backdrop: "bg-black/50 backdrop-opacity-40",
        }}
        isOpen={showSetup}
        placement="center"
        size="lg"
        onClose={handleSetupCancel}
      >
        <ModalContent>
          <ModalBody className="p-0">
            <MfaSetup
              onCancel={handleSetupCancel}
              onSetupComplete={handleSetupComplete}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Disable MFA Confirmation Modal */}
      <Modal
        backdrop="opaque"
        isOpen={showDisableModal}
        placement="center"
        size="sm"
        onClose={() => setShowDisableModal(false)}
      >
        <ModalContent>
          <ModalHeader>Disable Two-Factor Authentication</ModalHeader>
          <ModalBody>
            <p className="text-sm text-gray-600">
              Are you sure you want to disable two-factor authentication? This
              will make your account less secure.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="default"
              disabled={disableMfaMutation.isPending}
              variant="flat"
              onClick={() => setShowDisableModal(false)}
            >
              Cancel
            </Button>
            <Button
              color="danger"
              disabled={disableMfaMutation.isPending}
              isLoading={disableMfaMutation.isPending}
              onClick={handleDisableMfa}
            >
              Disable MFA
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
