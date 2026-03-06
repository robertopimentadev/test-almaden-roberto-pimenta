import React from "react";
import { IconCheck, IconCopy, IconEye, IconEyeOff } from "./SVGIcons";

interface IPasswordField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  copied: boolean;
  onCopy: () => void;
}

export function PasswordField({
  value,
  onChange,
  showPassword,
  setShowPassword,
  copied,
  onCopy,
}: IPasswordField) {
  return (
    <div className="flex items-center border rounded overflow-hidden">
      <input
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        className="flex-1 p-2 text-sm outline-none"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="px-2 text-gray-500 hover:text-gray-700 transition"
        title={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <IconEyeOff /> : <IconEye />}
      </button>
      <button
        type="button"
        onClick={onCopy}
        className="px-2 text-gray-500 hover:text-gray-700 transition"
        title="Copy password"
      >
        {copied ? (
          <span className="text-green-500">
            <IconCheck />
          </span>
        ) : (
          <IconCopy />
        )}
      </button>
    </div>
  );
}
