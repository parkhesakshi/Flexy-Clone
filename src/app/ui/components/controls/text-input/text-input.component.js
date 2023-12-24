import React from "react";
import "../text-input/text-input.component.scss";

const TextInput = ({ label, placeholder, isInlineLable = false }) => {
  return (
    <div className={`text-input d-flex p-3 ${!isInlineLable && "flex-column"}`}>
      {label && <label htmlFor="name">{label}</label>}
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
