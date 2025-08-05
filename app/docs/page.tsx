"use client";

import Link from "next/link";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Input } from "@heroui/input";
import { Snippet } from "@heroui/snippet";

export default function DocumentationPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold text-foreground">Documentation</h1>
        <div className="max-w-2xl">
          <Input
            className="w-full"
            placeholder="Search documentation..."
            type="search"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
            <p className="text-sm text-default-500 mb-4">
              Learn the basics and get up and running quickly.
            </p>
            <Link
              className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
              href="#"
            >
              Read Guide
            </Link>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-2">API Reference</h3>
            <p className="text-sm text-default-500 mb-4">
              Detailed API documentation and examples.
            </p>
            <Link
              className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
              href="#"
            >
              View APIs
            </Link>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-2">Components</h3>
            <p className="text-sm text-default-500 mb-4">
              Browse our collection of UI components.
            </p>
            <Link
              className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
              href="#"
            >
              Explore
            </Link>
          </CardBody>
        </Card>
      </div>

      {/* Documentation Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Quick Start Guide</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <p className="text-default-500">
                  Get started with our platform in just a few minutes. Follow
                  these simple steps:
                </p>
                <div className="space-y-2">
                  <p className="font-medium">1. Installation</p>
                  <Snippet hideCopyButton hideSymbol variant="bordered">
                    <span>npm install @heroui/react @heroui/theme</span>
                  </Snippet>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">2. Import Components</p>
                  <Snippet hideCopyButton hideSymbol variant="bordered">
                    <span>import Link from 'next/link';</span>
                  </Snippet>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">3. Use in your project</p>
                  <Snippet hideCopyButton hideSymbol variant="bordered">
                    <span>
                      {
                        '<Link href="#" className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90">Get Started</Link>'
                      }
                    </span>
                  </Snippet>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Latest Updates</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <p className="font-medium">New Component Library</p>
                  <p className="text-sm text-default-500">
                    We've released a new set of components focused on data
                    visualization.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <p className="font-medium">Performance Improvements</p>
                  <p className="text-sm text-default-500">
                    Major performance optimizations in the latest release.
                  </p>
                </div>
                <div>
                  <p className="font-medium">Bug Fixes</p>
                  <p className="text-sm text-default-500">
                    Various bug fixes and improvements across the platform.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Popular Topics</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-2">
                <Link
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-default-100"
                  href="#"
                >
                  Authentication
                </Link>
                <Link
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-default-100"
                  href="#"
                >
                  Data Management
                </Link>
                <Link
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-default-100"
                  href="#"
                >
                  Customization
                </Link>
                <Link
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-default-100"
                  href="#"
                >
                  Deployment
                </Link>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Need Help?</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-default-500 mb-4">
                Can't find what you're looking for? Get in touch with our
                support team.
              </p>
              <Link
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
                href="#"
              >
                Contact Support
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
