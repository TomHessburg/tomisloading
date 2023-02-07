import React from "react";

interface Props {
  text: string;
  checked: boolean;
  toggleCheck: Function;
}

export default function CheckBox({ text, checked, toggleCheck }: Props) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={`filter-${text}`}
        type="checkbox"
        checked={checked}
        onChange={() => toggleCheck()}
        className="w-4 h-4 cursor-pointer text-brand bg-gray-100 border-gray-300 rounded focus:ring-brand focus:ring-2"
      />
      <label
        htmlFor={`filter-${text}`}
        className="ml-2 cursor-pointer text-sm w-full"
      >
        {text}
      </label>
    </div>
  );
}
