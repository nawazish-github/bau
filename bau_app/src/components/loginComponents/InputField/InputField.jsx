import React from "react";

function InputField({ type, placeholder, value, onChange, className, id, name, required, autoComplete }) {
  return (
    <div className="rounded-lg">
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        id={id}
        name={name}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default InputField;
