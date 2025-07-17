import React from "react";

function Header() {
  const currentDate = new Date();

  return (
    <>
      <div className="flex justify-between items-center w-full  l bg-white">
        <div className="ml-8">
          <img
            src="../src/assets/bau_logo1.png"
            alt="logo"
            className="w-16 p-1"
          />
        </div>
        <div className="font-semibold text-lg font-serif text-blue-950">
          <span className="text-3xl font-semibold">B</span>USINESS
          <span className="mx-2"><span className="text-3xl font-semibold">A</span>S</span>
          <span className="text-3xl font-semibold">U</span>SUAL
        </div>
        <div className="text-center border border-black p-0.5 mr-8">
          <span className="font-semibold">Date : </span>
          <span className="text-sm font-mono">
            {currentDate.toLocaleDateString()}
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
