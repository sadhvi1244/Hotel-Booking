import React from "react";
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

// ResizablePanelGroup Component
const ResizablePanelGroup = ({ className, ...props }) => (
  <ResizablePrimitive.PanelGroup
    className={`flex h-full w-full data-[panel-group-direction=vertical]:flex-col ${className}`}
    {...props}
  />
);

// ResizablePanel Component
const ResizablePanel = ResizablePrimitive.Panel;

// ResizableHandle Component
const ResizableHandle = ({ withHandle, className, ...props }) => (
  <ResizablePrimitive.PanelResizeHandle
    className={`relative flex w-px items-center justify-center bg-gray-300 dark:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-500 transition-all duration-200 ease-in-out data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full ${className}`}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-gray-400 dark:bg-gray-500">
        <GripVertical className="h-2.5 w-2.5 text-gray-700 dark:text-gray-300" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
