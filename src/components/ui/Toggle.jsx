import React, { useState } from "react";

const Toggle = ({ size = "default", variant = "default", onChange }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    onChange && onChange(!isOn);
  };

  const sizeClasses = {
    default: "h-10 px-3",
    sm: "h-9 px-2.5",
    lg: "h-11 px-5",
  };

  const variantClasses = {
    default: "bg-gray-200 text-gray-700",
    outline: "border border-gray-400 bg-transparent hover:bg-gray-300",
  };

  return (
    <button
      onClick={handleToggle}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50 
        ${isOn ? "bg-blue-500 text-white" : variantClasses[variant]} 
        ${sizeClasses[size]}`}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
};

export { Toggle };
