"use client";

import React, { useState } from "react";
import { HookDetail } from "./hook-details";
import { hooks } from "../_hooks/hookList";
import { LayoutList } from "lucide-react";
import { Input } from "@/components/ui/input";

function HookDisplay() {
  const [selectedHook, setSelectedHook] = useState<number | null>(null);
  return (
    <div className="flex flex-col ">
      <div className="relative mt-4">
        <div className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center">
          <LayoutList className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
        </div>
        <Input
          id="name"
          name="name"
          placeholder="Filter by hook name"
          autoComplete="off"
          className="h-9 w-full rounded-lg border border-zinc-200 bg-zinc-50 pl-10 text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-700 dark:focus-visible:ring-zinc-700"
        />
      </div>
      <div className=" grid grid-cols-6 mt-4">
        {hooks.map((hook, index) => (
          <div
            key={hook.name}
            onClick={() => setSelectedHook(index)}
            className="cursor-pointer p-4 transition-colors rounded-xl border    hover:border-gray-500 hover:ring-4 hover:ring-gray-200 dark:hover:ring-neutral-800 dark:hover:border-neutral-600"
          >
            <h3 className="font-semibold">{hook.name}</h3>
            <p className="text-gray-600 dark:text-muted-foreground text-sm mt-1">
              {hook.description}
            </p>
          </div>
        ))}
        {selectedHook !== null && (
          <HookDetail
            isOpen={selectedHook !== null}
            onClose={() => setSelectedHook(null)}
            title={hooks[selectedHook].name}
            example={React.createElement(hooks[selectedHook].Example)}
            code={hooks[selectedHook].hook.toString()}
            githubUrl={hooks[selectedHook].githubUrl}
          />
        )}
      </div>
    </div>
  );
}

export default HookDisplay;
