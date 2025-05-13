import React, { forwardRef } from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

// Separator Component
const Separator = forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={`shrink-0 bg-gray-300 dark:bg-gray-700 ${orientation === "horizontal" ? "h-px w-full" : "h-full w-px"} ${className}`}
    {...props}
  />
));

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
