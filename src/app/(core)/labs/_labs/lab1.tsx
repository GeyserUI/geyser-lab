"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";
import { RgbaStringColorPicker } from "react-colorful";

type Palette = string[];

const Lab1: React.FC = () => {
  const [color, setColor] = useState<string>("rgba(255, 0, 0, 1)");
  const [palette, setPalette] = useState<Palette>([]);

  // Load palette from localStorage on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPalette = localStorage.getItem("palette");
      if (savedPalette) {
        setPalette(JSON.parse(savedPalette));
      }
    }
  }, []);

  // Save color to palette
  const saveToPalette = useCallback(() => {
    if (!palette.includes(color)) {
      const newPalette = [...palette, color];
      setPalette(newPalette);
      if (typeof window !== "undefined") {
        localStorage.setItem("palette", JSON.stringify(newPalette));
      }
    }
  }, [color, palette]);

  // Delete color from palette
  const deleteFromPalette = useCallback((indexToDelete: number) => {
    setPalette((prevPalette) => {
      const newPalette = prevPalette.filter(
        (_, index) => index !== indexToDelete
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("palette", JSON.stringify(newPalette));
      }
      return newPalette;
    });
  }, []);

  return (
    <div className="max-w-2xl grid grid-cols-2 mx-auto gap-4 font-sans">
      {/* Color Picker and Save Button */}
      <div className="flex flex-col p-3 border rounded-lg border-dashed gap-3 items-center">
        <RgbaStringColorPicker color={color} onChange={setColor} />
        <Button className="w-full" onClick={saveToPalette} variant="outline">
          Save to Palette
        </Button>
      </div>

      {/* Current Color Information */}
      <div className="p-3 flex gap-2 flex-col border rounded-lg border-dashed">
        <p className="text-neutral-500 text-xs uppercase">
          Current Color (RGBA):
        </p>
        <p className="flex gap-2 items-center">
          <div
            className="w-4 h-4 rounded border border-dashed"
            style={{ backgroundColor: color }}
          ></div>
          {color.toUpperCase()}
        </p>
        <p className="text-muted-foreground text-sm uppercase">
          Created with{" "}
          <Link
            href="https://www.npmjs.com/package/react-colorful"
            className="underline"
          >
            react-colorful
          </Link>
          , a very lightweight, dependency-free color picker.
        </p>
      </div>

      {/* Saved Palette */}
      <div className="col-span-2 p-3 rounded-lg border border-dashed">
        <h3 className="text-xs uppercase text-muted-foreground font-semibold mb-2">
          Saved Palettes:
        </h3>
        <div className="flex flex-wrap gap-2">
          {palette.map((savedColor, index) => (
            <div
              key={index}
              className="w-16 h-16 rounded-lg border-2 border-dashed border-black relative group"
              style={{ backgroundColor: savedColor }}
            >
              {/* Color selection area */}
              <div
                className="w-full h-full cursor-pointer"
                onClick={() => setColor(savedColor)}
              ></div>

              {/* Delete button in top-right corner */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteFromPalette(index);
                }}
                className="absolute -top-2 -right-2 p-1.5 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-200"
              >
                <Trash className="w-4 h-4 text-red-600" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lab1;
