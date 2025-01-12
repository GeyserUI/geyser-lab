"use client";

import React from "react";
import { Copy, X, Github } from "lucide-react";

interface HookDetailProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  example: React.ReactNode;
  code: string;
  githubUrl: string;
}

export function HookDetail({
  isOpen,
  onClose,
  title,
  example,
  code,
  githubUrl,
}: HookDetailProps) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-7xl max-h-[90vh] overflow-hidden shadow-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex h-[calc(90vh-80px)]">
          {/* Example Section */}
          <div className="flex-grow p-6 overflow-auto">
            <div className="bg-gray-50 rounded-lg p-6 h-full">{example}</div>
          </div>

          {/* Code Section */}
          <div className="w-1/3 border-l">
            <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
              <span className="font-medium">Implementation</span>
              <div className="space-x-2">
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-gray-200 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </button>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-200 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
            <pre className="p-4 overflow-auto h-[calc(100%-64px)] bg-gray-50">
              <code className="text-sm">{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
