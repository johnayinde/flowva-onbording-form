import React from "react";

// Button component with primary style
export const PrimaryButton = ({ children, onClick, className = "" }) => (
  <button
    className={`w-full px-6 bg-[#9013FE] text-white font-semibold rounded-xl hover:bg-[#A29BFE] transition-all transform hover:-translate-y-0.5 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export const SkipButton = ({ children, onClick, className = "" }) => (
  <button
    className={`w-auto py-2 px-4 text-gray-700 hover:text-[#9013FE] font-medium transition-colors opacity-70 hover:opacity-100 whitespace-nowrap ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
// Form section title
export const FormTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-[#9013FE] mb-6">{children}</h2>
);

// Form description
export const FormDescription = ({ children }) => (
  <p className="mb-6 text-lg ">{children}</p>
);

// Form field label with optional error message
export const FieldLabel = ({ children, error, showError = false }) => (
  <div className="flex flex-col mb-2">
    <label className="font-semibold">{children}</label>
    {showError && error && <div className="font-semibold">{error}</div>}
  </div>
);

// Radio item
export const RadioItem = ({ name, value, label, checked, onChange }) => (
  <label className="flex items-center hover:text-[#9013FE] cursor-pointer">
    <input
      type="radio"
      name={name}
      value={value}
      className="mr-2"
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);

// Checkbox item
export const CheckboxItem = ({ name, value, label, checked, onChange }) => (
  <label className="flex items-center hover:text-[#9013FE] cursor-pointer">
    <input
      type="checkbox"
      name={name}
      value={value}
      className="mr-2"
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);

// Button group container
export const ButtonGroup = ({ children }) => (
  <div className="flex gap-4 mt-auto pt-6">{children}</div>
);

// Tool item component
export const ToolItem = ({ name, icon, selected, onClick }) => (
  <div
    className={`flex flex-col items-center p-3 border rounded-xl cursor-pointer transition-all transform hover:-translate-y-0.5 hover:border-[#9013FE] ${
      selected ? "bg-[#A29BFE] border-[#9013FE]" : "border-gray-300"
    }`}
    onClick={onClick}
  >
    <span className="text-sm mb-2">{icon}</span>
    <span className="text-lg">{name}</span>
  </div>
);
