import React, { useState } from "react";

const Tabs = ({ children, defaultTab, className }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || 0);

  return (
    <div className={`w-full ${className}`}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { activeTab, setActiveTab, index })
      )}
    </div>
  );
};

const TabsList = ({ children, activeTab, setActiveTab, className }) => (
  <div className={`flex space-x-2 bg-gray-200 p-1 rounded-md ${className}`}>
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, { activeTab, setActiveTab, index })
    )}
  </div>
);

const TabsTrigger = ({
  children,
  activeTab,
  setActiveTab,
  index,
  className,
}) => (
  <button
    onClick={() => setActiveTab(index)}
    className={`px-4 py-2 text-sm font-medium rounded-sm transition-all ${
      activeTab === index
        ? "bg-white text-black shadow-md"
        : "text-gray-600 hover:bg-gray-300"
    } ${className}`}
  >
    {children}
  </button>
);

const TabsContent = ({ children, activeTab, index, className }) => {
  if (activeTab !== index) return null;
  return <div className={`mt-2 ${className}`}>{children}</div>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
