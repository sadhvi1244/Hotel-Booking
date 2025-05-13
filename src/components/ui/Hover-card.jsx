import React, { forwardRef } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = forwardRef(
  ({ className, align = "center", sideOffset = 8, ...props }, ref) => (
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-lg transition-all duration-200 ease-in-out",
        "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut",
        "data-[state=closed]:scale-95 data-[state=open]:scale-100",
        className
      )}
      {...props}
    />
  )
);

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
