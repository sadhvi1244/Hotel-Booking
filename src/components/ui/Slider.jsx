import React, { useState } from "react";

const Slider = ({ className, ...props }) => {
  const [value, setValue] = useState(50); // Default slider value

  return (
    <div
      className={`relative flex w-full items-center ${className}`}
      {...props}
    >
      {/* Track */}
      <div className="relative h-2 w-full rounded-full bg-gray-300">
        {/* Range (filled part) */}
        <div
          className="absolute h-full bg-blue-500 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
      {/* Thumb (slider handle) */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="absolute w-full h-2 opacity-0 cursor-pointer"
      />
      <div
        className="absolute left-0 transform -translate-x-1/2 w-5 h-5 rounded-full border-2 border-blue-500 bg-white shadow-md transition-transform"
        style={{ left: `${value}%` }}
      />
    </div>
  );
};

export default Slider;
