import React from "react";

function InputField({ type, placeholder, value, onChange }) {
  return (
    <div className="rounded-lg">
      <input
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-indigo-500"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default InputField;
