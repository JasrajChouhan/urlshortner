import React from "react";
import clsx from 'clsx';

export interface InputProps {
  value: string;
  type: "text";
  placeholder?: string;
  label?: string;
  isLabelHidden?: boolean;
  isDisabled?: boolean;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  className?: string;
  variant?: "default" | "outline" | "filled";
  size?: "sm" | "md" | "lg";

}

export const Input = ({
  value,
  type = "text",
  placeholder,
  label,
  isLabelHidden = false,
  isDisabled = false,
  variant = "default",
  size = "md",
  onChange,
  onBlur,
  onFocus,
  className,
  ...rest
}: InputProps) => {
  const inputClasses = clsx(
    "block w-full rounded-md transition duration-200",
    {
      "bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500":
        variant === "default",
      "border border-gray-300 bg-transparent focus:ring-2 focus:ring-blue-500":
        variant === "outline",
      "bg-gray-100 border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500":
        variant === "filled",
    },
    {
      "text-sm px-2 py-1": size === "sm",
      "text-base px-3 py-2": size === "md",
      "text-lg px-4 py-3": size === "lg",
    },
    isDisabled && "cursor-not-allowed opacity-50",
    className
  )

  const labelClasses = clsx(
    "block text-sm font-medium mb-1",
    isLabelHidden && "sr-only"
  );
  return (
    <div className="w-full">
      {label && <label className={labelClasses}>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={inputClasses}
        {...rest}
      />
    </div>
  )
}