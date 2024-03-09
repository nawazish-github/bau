import React from "react";

function Dashboard() {
  return (
    <>
      <div className="flex justify-center items-center h-24 bg-yellow-100">
        <div className="p-8 font-bold text-xl">Dashboard</div>
      </div>
      <div className="w-full flex justify-evenly items-center mt-16">
        <div>
          <button
            type="button"
            className="bg-red-300 rounded-xl p-8 pl-12 pr-12 shadow-lg shadow-red-500 font-bold"
          >
            Sales
          </button>
        </div>
        <div>
          <button
            type="button"
            className="bg-green-300 rounded-xl p-8 shadow-lg shadow-green-500 font-bold"
          >
            Purchases
          </button>
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-300 rounded-xl p-8 shadow-lg shadow-blue-500 font-bold"
          >
            Inventory
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
