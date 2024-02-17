import React from "react";

function InputField({ type, placeholder, value, onChange }) {
  return (
    <div className="rounded-lg">
      <input
        className="w-full border rounded-lg p-3"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
