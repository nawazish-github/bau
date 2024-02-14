import React from "react";

function Input({placeholder, type}) {
  return (
    <div className="rounded-lg">
      <input className="w-full border rounded-lg p-3" type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
