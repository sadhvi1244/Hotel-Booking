import React, { forwardRef } from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

const Menubar = forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={`flex h-12 items-center space-x-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 shadow-md transition-all duration-200 ease-in-out ${className}`}
    {...props}
  />
));

const MenubarTrigger = forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={`flex cursor-pointer items-center rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-200 dark:focus:bg-gray-700 ${className}`}
    {...props}
  />
));

const MenubarContent = forwardRef(
  ({ className, align = "start", sideOffset = 8, ...props }, ref) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={`z-50 min-w-[12rem] rounded-md border bg-white dark:bg-gray-900 p-2 text-sm shadow-lg transition-all duration-200 ease-in-out ${className}`}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
);

const MenubarItem = forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={`flex cursor-pointer items-center rounded-md px-4 py-2 text-sm transition-all hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-200 dark:focus:bg-gray-700 ${className}`}
    {...props}
  />
));

const MenubarSub = MenubarPrimitive.Sub;

const MenubarSubTrigger = forwardRef(
  ({ className, children, ...props }, ref) => (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      className={`flex cursor-pointer items-center rounded-md px-4 py-2 text-sm transition-all hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-200 dark:focus:bg-gray-700 ${className}`}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
);

const MenubarSubContent = forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={`z-50 min-w-[8rem] rounded-md border bg-white dark:bg-gray-900 p-2 text-sm shadow-lg transition-all duration-200 ease-in-out ${className}`}
    {...props}
  />
));

const MenubarSeparator = forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={`my-2 h-px bg-gray-200 dark:bg-gray-700 ${className}`}
    {...props}
  />
));

const MenubarLabel = forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={`px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 ${className}`}
    {...props}
  />
));

const MenubarCheckboxItem = forwardRef(
  ({ className, children, checked, ...props }, ref) => (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      checked={checked}
      className={`relative flex cursor-pointer items-center rounded-md px-4 py-2 text-sm transition-all hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-200 dark:focus:bg-gray-700 ${className}`}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
);

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const MenubarRadioItem = forwardRef(
  ({ className, children, ...props }, ref) => (
    <MenubarPrimitive.RadioItem
      ref={ref}
      className={`relative flex cursor-pointer items-center rounded-md px-4 py-2 text-sm transition-all hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-200 dark:focus:bg-gray-700 ${className}`}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
);

const MenubarShortcut = ({ className, ...props }) => (
  <span
    className={`ml-auto text-xs text-gray-500 dark:text-gray-400 ${className}`}
    {...props}
  />
);

Menubar.displayName = "Menubar";
MenubarTrigger.displayName = "MenubarTrigger";
MenubarContent.displayName = "MenubarContent";
MenubarItem.displayName = "MenubarItem";
MenubarSub.displayName = "MenubarSub";
MenubarSubTrigger.displayName = "MenubarSubTrigger";
MenubarSubContent.displayName = "MenubarSubContent";
MenubarSeparator.displayName = "MenubarSeparator";
MenubarLabel.displayName = "MenubarLabel";
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";
MenubarRadioGroup.displayName = "MenubarRadioGroup";
MenubarRadioItem.displayName = "MenubarRadioItem";
MenubarShortcut.displayName = "MenubarShortcut";

export {
  Menubar,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
};
