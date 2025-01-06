"use client";

import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { useSelectedLayoutSegments } from "next/navigation";
import { FlaskConical, Home, NotebookTabs } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Labs", href: "/labs", icon: FlaskConical },
  { label: "Guides", href: "/guides", icon: NotebookTabs },
  // { label: "Source", href: "/source", icon: Database },
  // { label: "Evaluate", href: "/evaluate", icon: BarChart },
  // { label: "Serviced Accommodation", href: "/accommodation", icon: Home },
];

export function NavItems() {
  const segments = useSelectedLayoutSegments();
  return (
    <div className="flex items-center gap-1">
      {navItems.map((item) => (
        <div
          key={item.label}
          className={cn(
            segments.includes(item.href)
              ? "rounded-lg p-px bg-gradient-to-b from-gray-600 via-gray-600 to-gray-700"
              : ""
          )}
        >
          <Button asChild variant={"ghost"}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-colors rounded-[calc(0.5rem-1px)]",
                segments.includes(item.href)
                  ? "text-white bg-gray-700"
                  : "text-gray-300 hover:bg-gray-700/50"
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
