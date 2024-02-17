import React from "react";

function Button({type, btnname}) {
  return (
    <div className=" text-white bg-sky-600 font-bold mt-6  cursor-pointer rounded-lg max-w-fit">
      <button className="w-full rounded-lg p-2" type={type}>{btnname}</button>
    </div>
  );
}

export default Button;
