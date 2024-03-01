import React from "react";

function Button({ type, btnname, isDisabled }) {
  return (
    <button
      className={`border border-gray-300 rounded-lg p-2 font-bold mt-6 ${
        isDisabled
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
      } `}
      type={type}
      disabled={isDisabled}
    >
      {btnname}
    </button>
  );
}

export default Button;
