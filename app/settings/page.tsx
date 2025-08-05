"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Switch } from "@heroui/switch";
import { useState } from "react";

import { MfaManagement } from "@/components/auth/MfaManagement";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    updates: true,
    marketing: false,
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Profile Settings</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-default-500">First Name</p>
              <Input placeholder="John" />
            </div>
            <div>
              <p className="text-sm text-default-500">Last Name</p>
              <Input placeholder="Doe" />
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-default-500">Email</p>
              <Input placeholder="john@example.com" type="email" />
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-default-500">Bio</p>
              <Input className="h-24" placeholder="Tell us about yourself" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button color="primary">Save Changes</Button>
          </div>
        </CardBody>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Notification Preferences</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-base">Email Notifications</p>
                <p className="text-sm text-default-500">
                  Receive email updates about your account
                </p>
              </div>
              <Switch
                checked={notifications.email}
                onChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, email: checked }))
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-base">Push Notifications</p>
                <p className="text-sm text-default-500">
                  Receive push notifications on your devices
                </p>
              </div>
              <Switch
                checked={notifications.push}
                onChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, push: checked }))
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-base">Product Updates</p>
                <p className="text-sm text-default-500">
                  Receive updates about product changes
                </p>
              </div>
              <Switch
                checked={notifications.updates}
                onChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, updates: checked }))
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-base">Marketing Emails</p>
                <p className="text-sm text-default-500">
                  Receive marketing and promotional emails
                </p>
              </div>
              <Switch
                checked={notifications.marketing}
                onChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, marketing: checked }))
                }
              />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Security</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-default-500">Current Password</p>
              <Input placeholder="Enter current password" type="password" />
            </div>
            <div>
              <p className="text-sm text-default-500">New Password</p>
              <Input placeholder="Enter new password" type="password" />
            </div>
            <div>
              <p className="text-sm text-default-500">Confirm New Password</p>
              <Input placeholder="Confirm new password" type="password" />
            </div>
            <div className="flex justify-end">
              <Button color="primary">Update Password</Button>
            </div>
          </div>

          <div className="border-t pt-4 mt-4">
            <MfaManagement />
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="font-medium text-danger mb-2">Danger Zone</p>
            <p className="text-sm text-default-500 mb-4">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <Button color="danger" variant="flat">
              Delete Account
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
