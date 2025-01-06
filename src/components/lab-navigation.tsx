"use client";

import { usePathname } from "next/navigation";
import { Link, useTransitionRouter } from "next-view-transitions";
import {
  ArrowLeft,
  ArrowLeftToLine,
  ArrowRight,
  CodeXml,
  FlaskConical,
  Github,
  List,
  NotepadTextDashed,
} from "lucide-react";
import { GradientBorderButton } from "@/components/ui/gradient-border-button";
import { labs } from "@/lib/siteConfig";
import { KeyboardEvent, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const LabNavigation = () => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const currentLabId = pathname.split("/").pop();

  const [inputValue, setInputValue] = useState("");

  const currentLabIndex = labs.findIndex((lab) => lab.slug === currentLabId);
  const currentLab = labs[currentLabIndex];

  useEffect(() => {
    setInputValue((currentLabIndex + 1).toString());
  }, [currentLabIndex]);
  const prevLab = currentLabIndex > 0 ? labs[currentLabIndex - 1] : null;
  const nextLab =
    currentLabIndex < labs.length - 1 ? labs[currentLabIndex + 1] : null;
  const handleLabNumberInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const input = parseInt((e.target as HTMLInputElement).value);
      if (input > 0 && input <= labs.length) {
        const targetLab = labs[input - 1];
        if (targetLab) {
          router.push(`/labs/${targetLab.slug}`);
        }
      }
    }
  };

  if (!currentLab) {
    return null; // Render nothing if the current lab is undefined
  }

  return (
    <div className="flex items-center p-4 text-sm dark:text-gray-300 text-black/70">
      <div className="flex items-center gap-2">
        <FlaskConical className="size-4" />
        <span>All Labs</span>
        <span className="text-gray-500">/</span>
        <span>{currentLab.title}</span>
        <Button
          className="ml-1 text-foreground bg-neutral-50 border dark:border-neutral-700 shadow dark:bg-neutral-800 rounded-lg"
          variant={"outline"}
          size={"sm"}
        >
          <CodeXml /> Code
        </Button>
      </div>
      <div className="ml-auto mr-4 flex items-center gap-2">
        <span>Showing lab</span>
        <Input
          type="number"
          min={1}
          max={labs.length}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleLabNumberInput}
          className="w-12  text-foreground bg-neutral-50 border dark:border-neutral-700 shadow dark:bg-neutral-800 rounded-lg text-center  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  focus-visible:ring-blue-400"
        />
        <span>of {labs.length} labs</span>
      </div>
      <div className="flex gap-2">
        <Button
          className="bg-neutral-50 border dark:border-neutral-700 shadow dark:bg-neutral-800 rounded-lg text-foreground"
          size={"icon"}
          variant={"outline"}
        >
          <List />
        </Button>
        {prevLab && (
          <Button
            className="bg-neutral-50 border dark:border-neutral-700 shadow dark:bg-neutral-800 rounded-lg text-foreground"
            variant={"outline"}
            asChild
          >
            <Link href={`/labs/${prevLab.slug}`}>
              <ArrowLeft /> Previous
            </Link>
          </Button>
        )}
        {nextLab && (
          <Button
            className="bg-neutral-50 border dark:border-neutral-700 shadow dark:bg-neutral-800 rounded-lg text-foreground"
            variant={"outline"}
            asChild
          >
            <Link href={`/labs/${nextLab.slug}`}>
              Next <ArrowRight className="ml-2" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default LabNavigation;
