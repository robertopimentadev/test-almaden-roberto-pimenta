import React from "react";

interface IInputField {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function InputField({
  placeholder,
  value,
  onChange,
  type = "text",
  onFocus,
}: IInputField) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      onFocus={onFocus}
      className="border rounded p-2 text-sm"
    />
  );
}
