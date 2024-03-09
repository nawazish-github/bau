import React from "react";

function Header() {
  const currentDate = new Date();

  return (
    <>
      <div className=" bg-fuchsia-300 flex justify-center items-center h-16">
        <div className="font-bold text-4xl  ml-96 pl-56 ">BAU</div>
        <div className="pl-56 ml-72 ">
          Date: {currentDate.toLocaleDateString()}
        </div>
      </div>
    </>
  );
}

export default Header;
