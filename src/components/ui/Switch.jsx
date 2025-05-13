import React, { useState } from "react";

const Switch = ({ className, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label
      className={`relative inline-flex items-center cursor-pointer ${className}`}
    >
      {/* Hidden Checkbox */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="sr-only"
        {...props}
      />
      {/* Background Track */}
      <div
        className={`w-11 h-6 rounded-full transition-colors ${
          isChecked ? "bg-blue-500" : "bg-gray-300"
        }`}
      />
      {/* Thumb (Switch Handle) */}
      <div
        className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-md transform transition-transform ${
          isChecked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </label>
  );
};

export default Switch;
