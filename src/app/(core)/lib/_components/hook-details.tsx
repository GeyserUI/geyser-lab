"use client";

import React from "react";
import { Copy, X, Github, ExternalLink } from "lucide-react";
import {
  DialogContent,
  DialogTrigger,
  Dialog,
  DialogHeader,
} from "@/components/ui/dialog";
import { GithubRepo } from "./github-repo";
import CodeBlock from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { GridPattern } from "./grid-pattern";

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
    // <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-12">
    //   <div className="bg-white rounded-lg w-full max-w-8xl max-h-[90vh] overflow-hidden shadow-xl">
    //     <div className="flex justify-between items-center p-4 border-b">
    //       <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    //       <button
    //         onClick={onClose}
    //         className="p-2 hover:bg-gray-100 rounded-full transition-colors"
    //       >
    //         <X className="w-6 h-6" />
    //       </button>
    //     </div>

    //     <div className="flex h-[calc(90vh-80px)]">
    //       {/* Example Section */}
    //       <div className="flex-grow p-6 overflow-auto">
    //         <div className="bg-gray-50 rounded-lg p-6 h-full">{example}</div>
    //       </div>

    //       {/* Code Section */}
    //       <div className="w-1/3 border-l">
    //         <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
    //           <span className="font-medium">Implementation</span>
    //           <div className="space-x-2">
    //             <button
    //               onClick={copyToClipboard}
    //               className="p-2 hover:bg-gray-200 rounded-md transition-colors inline-flex items-center gap-2"
    //             >
    //               <Copy className="w-4 h-4" />
    //               Copy
    //             </button>
    //             <a
    //               href={githubUrl}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="p-2 hover:bg-gray-200 rounded-md transition-colors inline-flex items-center gap-2"
    //             >
    //               <Github className="w-4 h-4" />
    //               View on GitHub
    //             </a>
    //           </div>
    //         </div>
    //         <pre className="p-4 overflow-auto h-[calc(100%-64px)] bg-gray-50">
    //           <code className="text-sm">{code}</code>
    //         </pre>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 max-w-7xl gap-3">
        <DialogHeader className="text-sm flex h-full border-b justify-center p-3 ">
          {title}
        </DialogHeader>

        {/* <div className="flex gap-3 px-4 w-full justify-end">
          <Button size={"icon"} variant={"outline"} className="bg-gray-50">
            <Github />
          </Button>
        </div> */}
        <div className="flex w-full justify-between divide-y">
          <div className="relative border rounded-lg mx-3 mb-3   w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
              <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100">
                  <GridPattern
                    width={90}
                    height={90}
                    x={-2}
                    y={-90}
                    squares={[
                      [4, 3],
                      [2, 1],
                      [7, 3],
                      [10, 6],
                    ]}
                    className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
                  />
                </div>
                <svg
                  viewBox="0 0 1113 440"
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
                >
                  <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
                </svg>
              </div>
            </div>
            {example}
          </div>

          <CodeBlock
            className="bg-gray-50 mb-3  overflow-visible mx-3"
            code={code}
            type="file"
            fileName={`/hooks/${title}.ts`}
            showLineNumbers={true}
            lang="ts"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
