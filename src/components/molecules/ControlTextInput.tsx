import React from "react";

interface InputProps {
  name: string;
  label: string;
  control: any;
  rules: Object;
  errors: any;
  minLength?: number;
  maxLength?: number;
}

export const ControlTextInput: React.FC<InputProps> = ({
  name,
  label,
  control,
  rules,
  errors,
  minLength,
  maxLength,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className={`form-control form-control-lg ${
          errors[name] && "is-invalid"
        }`}
        {...control.register(name, { ...rules, minLength, maxLength })}
      />
      {errors[name] && (
        <span className="text-danger small fw-bolder mt-1">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};
