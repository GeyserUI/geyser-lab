"use client";

import React, { useState } from "react";
import { HookDetail } from "./hook-details";
import { hooks } from "../_hooks/hookList";

function HookDisplay() {
  const [selectedHook, setSelectedHook] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Custom Hooks</h2>
        {hooks.map((hook, index) => (
          <div
            key={hook.name}
            onClick={() => setSelectedHook(index)}
            className="cursor-pointer p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold">{hook.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{hook.description}</p>
          </div>
        ))}
      </div>

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
  );
}

export default HookDisplay;
