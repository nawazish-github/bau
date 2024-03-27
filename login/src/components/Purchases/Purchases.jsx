import React from "react";
import OutletTitle from "../OutletTitle";
import Button from "../loginComponents/Button/Button";
import PurchaseForm from "./PurchaseForm";

function Purchases() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full flex">
          {/* Side Panel Div */}
          <div className="bg-green-400 w-1/5 h-screen">
            <OutletTitle
              title="Dashboard"
              className="bg-amber-200 font-semibold text-lg flex justify-center p-4"
            />
            <div className="grid justify-center gap-y-8 mt-8">
              <Button
                label="Sales"
                className="bg-zinc-700 text-white w-24 h-12 rounded-3xl"
              />
              <Button
                label="Inventory"
                className="bg-zinc-700 text-white w-24 h-12 rounded-3xl"
              />
            </div>
          </div>
          {/* Purchase Div */}
          <div className="w-full">
            <div>
              <OutletTitle
                title="Purchases"
                className=" bg-teal-300 w-full font-semibold text-xl h-10 flex justify-center items-center"
              />
            </div>
            <div className="flex justify-center gap-x-32 p-4">
              <Button
                label="New Purchase"
                className="bg-blue-400 w-24 h-16 rounded-xl"
              />
              <Button
                label="Update Purchase"
                className="bg-yellow-400 w-24 h-16 rounded-xl"
              />
              <Button
                label="Search Purchase"
                className="bg-green-400 w-24 h-16 rounded-xl"
              />
            </div>
            <PurchaseForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Purchases;
