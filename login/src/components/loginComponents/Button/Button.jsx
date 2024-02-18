import React from "react";

function Button({ type, btnname, className, isDisabled, onClick }) {
  return (
    <button
      className={` bg-sky-600 text-white rounded-lg p-2 font-bold mt-6 ${className}`}
      type={type}
      disabled={isDisabled()}
      onClick={onClick}
    >
      {btnname}
    </button>
  );
}

export default Button;
