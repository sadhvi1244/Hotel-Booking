import React, { forwardRef } from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

// NavigationMenu Root Component
const NavigationMenu = forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={`relative z-10 flex max-w-max flex-1 items-center justify-center ${className}`}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));

// Navigation Menu List
const NavigationMenuList = forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={`group flex flex-1 list-none items-center justify-center space-x-2 ${className}`}
    {...props}
  />
));

// Navigation Menu Item
const NavigationMenuItem = NavigationMenuPrimitive.Item;

// Navigation Menu Trigger (Dropdown Button)
const NavigationMenuTrigger = forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={`group inline-flex h-10 items-center justify-center rounded-md bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none ${className}`}
      {...props}
    >
      {children}
      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
    </NavigationMenuPrimitive.Trigger>
  )
);

// Navigation Menu Content (Dropdown Panel)
const NavigationMenuContent = forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={`absolute left-0 top-full w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out ${className}`}
    {...props}
  />
));

// Navigation Menu Link
const NavigationMenuLink = NavigationMenuPrimitive.Link;

// Navigation Menu Viewport (for animated dropdowns)
const NavigationMenuViewport = forwardRef(({ className, ...props }, ref) => (
  <div className="absolute left-0 top-full flex justify-center">
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={`relative mt-2 w-full rounded-md border bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out ${className}`}
      {...props}
    />
  </div>
));

// Navigation Menu Indicator (Dropdown Arrow)
const NavigationMenuIndicator = forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={`absolute top-full flex items-end justify-center overflow-hidden transition-all duration-200 ease-in-out ${className}`}
    {...props}
  >
    <div className="relative top-2 h-2 w-2 rotate-45 bg-gray-300 dark:bg-gray-700 shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));

// Component Display Names
NavigationMenu.displayName = "NavigationMenu";
NavigationMenuList.displayName = "NavigationMenuList";
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";
NavigationMenuContent.displayName = "NavigationMenuContent";
NavigationMenuViewport.displayName = "NavigationMenuViewport";
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";

// Exporting Components
export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
