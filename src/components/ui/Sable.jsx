import React from "react";

const Table = ({ className, children, ...props }) => (
  <div className="relative w-full overflow-auto">
    <table className={`w-full text-sm ${className}`} {...props}>
      {children}
    </table>
  </div>
);

const TableHeader = ({ className, children, ...props }) => (
  <thead className={`border-b ${className}`} {...props}>
    {children}
  </thead>
);

const TableBody = ({ className, children, ...props }) => (
  <tbody className={` ${className}`} {...props}>
    {children}
  </tbody>
);

const TableFooter = ({ className, children, ...props }) => (
  <tfoot className={`border-t bg-gray-100 font-medium ${className}`} {...props}>
    {children}
  </tfoot>
);

const TableRow = ({ className, children, ...props }) => (
  <tr
    className={`border-b transition-colors hover:bg-gray-100 ${className}`}
    {...props}
  >
    {children}
  </tr>
);

const TableHead = ({ className, children, ...props }) => (
  <th
    className={`h-12 px-4 text-left font-medium text-gray-600 ${className}`}
    {...props}
  >
    {children}
  </th>
);

const TableCell = ({ className, children, ...props }) => (
  <td className={`p-4 ${className}`} {...props}>
    {children}
  </td>
);

const TableCaption = ({ className, children, ...props }) => (
  <caption className={`mt-4 text-sm text-gray-500 ${className}`} {...props}>
    {children}
  </caption>
);

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
