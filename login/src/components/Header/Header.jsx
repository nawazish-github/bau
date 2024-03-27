import React from "react";

function Header() {
  const currentDate = new Date();

  return (
    <>
      <div className=" bg-fuchsia-400 flex justify-center items-center w-full h-14">
        <div className="font-bold text-4xl  ml-96 pl-60 ">BAU</div>
        <div className="pl-56 ml-72 ">
          Date: {currentDate.toLocaleDateString()}
        </div>
      </div>
    </>
  );
}

export default Header;
