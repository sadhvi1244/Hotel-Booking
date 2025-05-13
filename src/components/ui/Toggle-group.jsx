import React, { useState } from "react";

const ToggleGroup = ({ options, multiSelect = false, onChange }) => {
  const [selected, setSelected] = useState(multiSelect ? [] : null);

  const handleToggle = (value) => {
    if (multiSelect) {
      setSelected((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
      onChange && onChange(selected);
    } else {
      setSelected(value);
      onChange && onChange(value);
    }
  };

  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleToggle(option.value)}
          className={`rounded-md px-4 py-2 text-sm font-medium transition 
            ${
              multiSelect
                ? selected.includes(option.value)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
                : selected === option.value
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export { ToggleGroup };
