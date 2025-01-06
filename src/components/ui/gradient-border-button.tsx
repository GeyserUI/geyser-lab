"use client";

import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GradientBorderButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="rounded-lg p-px bg-gradient-to-b from-neutral-700 via-neutral-700 to-neutral-800">
        <Button
          className={cn(
            "rounded-[calc(0.5rem-1px)] bg-neutral-800 hover:bg-neutral-800",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
GradientBorderButton.displayName = "GradientBorderButton";

export { GradientBorderButton };
