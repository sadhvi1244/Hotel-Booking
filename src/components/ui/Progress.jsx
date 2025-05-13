import React, { forwardRef } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

// Progress Bar Component
const Progress = forwardRef(({ className, value = 0, ...props }, ref) => {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800 ${className}`}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-300 ease-in-out"
        style={{ width: `${value}%` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = "Progress";

export { Progress };
