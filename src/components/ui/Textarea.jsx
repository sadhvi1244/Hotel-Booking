import React from "react";

const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={`flex h-18 w-full rounded-md border-none border-gray-300 dark:border-gray-700 bg-[#F4F5F8] shadow-sm dark:bg-gray-900  px-6 py-5 text-base text-gray-900 dark:text-gray-200 ring-offset-background 
        file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-gray-400 dark:placeholder-gray-500 
        focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1
        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  ${className}`}
      {...props}
    />
  );
};

export { Textarea };
