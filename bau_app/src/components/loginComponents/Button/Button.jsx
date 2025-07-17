import React from "react";

function Button({ type, label, isDisabled, className, service, onClick }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={className}
      service={service}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
