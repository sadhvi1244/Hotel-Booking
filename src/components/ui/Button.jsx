import React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = {
  default:
    "bg-[#AE7D54] text-white shadow hover:bg-[#AE7D54]/90 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#AE7D54] disabled:pointer-events-none disabled:opacity-50",
  ghost: "hover:bg-[#f5ebe5] hover:text-[#AE7D54]",
};

const sizeVariants = {
  default: "h-12 px-4 py-2",
  sm: "h-8  px-3 text-xs",
  lg: "h-10  px-8",
  icon: "h-9 w-9",
};

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants[variant], sizeVariants[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
