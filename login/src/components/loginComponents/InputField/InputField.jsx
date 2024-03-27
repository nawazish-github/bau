import React from "react";

function InputField({ type, placeholder, value, onChange, className }) {
  return (
    <div className="rounded-lg">
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default InputField;
