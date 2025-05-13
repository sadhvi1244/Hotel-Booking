import React, { forwardRef } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

// Sheet Component (Drawer/Side Panel)
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

// Sheet Overlay (Background when Sheet is open)
const SheetOverlay = forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={`fixed inset-0 z-50 bg-black/70 transition-opacity data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut ${className}`}
    {...props}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

// Sheet Content (Main Sheet Component)
const SheetContent = forwardRef(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={`fixed z-50 p-6 shadow-lg bg-white dark:bg-gray-900 transition-transform ${
          side === "left"
            ? "left-0 h-full w-3/4 sm:max-w-sm translate-x-0"
            : side === "right"
            ? "right-0 h-full w-3/4 sm:max-w-sm translate-x-0"
            : side === "top"
            ? "top-0 w-full border-b translate-y-0"
            : "bottom-0 w-full border-t translate-y-0"
        } ${className}`}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
          <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

// Sheet Header
const SheetHeader = ({ className, ...props }) => (
  <div className={`text-center sm:text-left ${className}`} {...props} />
);
SheetHeader.displayName = "SheetHeader";

// Sheet Footer
const SheetFooter = ({ className, ...props }) => (
  <div
    className={`flex flex-col sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

// Sheet Title
const SheetTitle = forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={`text-lg font-semibold ${className}`}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

// Sheet Description
const SheetDescription = forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={`text-sm text-gray-500 ${className}`}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// Export Components
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
