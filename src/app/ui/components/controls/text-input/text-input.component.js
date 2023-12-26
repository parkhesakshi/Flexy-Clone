import React from "react";
import "../text-input/text-input.component.scss";

const TextInput = ({
  label,
  placeholder,
  isInlineLable = false,
  valueChanged,
  className,
  inputClass,
}) => {
  return (
    <div
      className={`text-input d-flex ${
        !isInlineLable && "flex-column"
      } ${className}`}
    >
      {label && <label htmlFor="name">{label}</label>}
      <input
        className={inputClass}
        type="text"
        placeholder={placeholder}
        onChange={(e) => valueChanged(e?.target?.value)}
      />
    </div>
  );
};

export default TextInput;
