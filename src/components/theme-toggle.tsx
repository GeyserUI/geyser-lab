"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { GradientBorderButton } from "./ui/gradient-border-button";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      className="bg-neutral-50 border dark:border-neutral-700 shadow dark:bg-neutral-800 rounded-lg text-foreground"
      variant={"outline"}
      size={"icon"}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5 " />
      ) : (
        <Moon className="h-5 w-5 " color="white" />
      )}
    </Button>
  );
}
