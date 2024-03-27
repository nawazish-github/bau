import React, { useState } from "react";
import InputField from "../loginComponents/InputField/InputField";

function PurchaseForm() {
  const [data, setData] = useState([
    { itemName: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
    { itemName: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
    { itemName: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
    { itemName: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
    { itemName: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
  ]);

  const handleInputChange = (index, columnName, value) => {
    const newData = [...data];
    newData[index][columnName] = value;
    setData(newData);
  };
  // Function to add a new row
  const addRow = (e) => {
    e.preventDefault();
    setData([
      ...data,
      { itemName: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
    ]);
  };

  // Calculate total net amount
  const totalNet = data.reduce((total, row) => {
    return total + (parseFloat(row.net) || 0);
  }, 0);

  return (
    <>
      {/* Form Div */}
      <div className="bg-gray-300 h-[29.45rem]">
        <form>
          <div className="flex justify-evenly items-center p-2">
            <div className="flex justify-center items-center">
              <label htmlFor="Vendor Name">Vendor Name: </label>
              <InputField
                type="text"
                placeholder="Vendor Name"
                className="border border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500"
                // value={username}
                // onChange={handleUsernameChange}
              />
            </div>
            <div className="flex justify-center items-center">
              <label htmlFor="Invoice">Invoice No: </label>
              <InputField
                type="text"
                placeholder="Invoice"
                className="border border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500"
                // value={username}
                // onChange={handleUsernameChange}
              />
            </div>
            <div className="flex justify-center items-center">
              <label htmlFor="GST NO">GST NO: </label>
              <InputField
                type="text"
                placeholder="GST NO"
                className="border border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500"
                // value={username}
                // onChange={handleUsernameChange}
              />
             </div>
          </div>
          <div className="flex justify-evenly items-center p-2 ml-20">
            <div className="ml-3 flex justify-center items-center">
              <label htmlFor="TIN">TIN: </label>
              <InputField
                type="text"
                placeholder="TIN"
                className="border border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500"
                // value={username}
                // onChange={handleUsernameChange}
              />
            </div>
            <div className="ml-11 flex justify-center items-center">
              <label htmlFor="Contact">Contact: </label>
              <InputField
                type="number"
                placeholder="Contact"
                className="border border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500"
                // value={username}
                // onChange={handleUsernameChange}
              />
            </div>
            <div className="flex justify-center items-center">
              <label htmlFor="Address">Address: </label>
              <textarea
                name="Address"
                id="Address"
                cols="30"
                rows="3"
                placeholder="Address"
              ></textarea>
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="max-h-[16.38rem] overflow-auto">
              <table className="min-w-full table-auto">
                <thead className="sticky top-0 bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-2 px-2 text-center">SL No</th>
                    <th className="py-2 px-2 text-center">Item Name</th>
                    <th className="py-2 px-2 text-center">Quantity</th>
                    <th className="py-2 px-2 text-center">Unit</th>
                    <th className="py-2 px-2 text-center">Discount</th>
                    <th className="py-2 px-2 text-center">Rate Per Unit</th>
                    <th className="py-2 px-2 text-center">Net</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {data.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-1 px-1 text-center whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="py-1 px-1 text-left">
                        <input
                          className="border rounded-lg px-1 py-1"
                          type="text"
                          value={row.itemName}
                          onChange={(e) =>
                            handleInputChange(index, "itemName", e.target.value)
                          }
                        />
                      </td>
                      <td className="py-1 px-1 text-left">
                        <input
                          className="border rounded-lg px-1 py-1"
                          type="number"
                          min="0"
                          value={row.quantity}
                          onChange={(e) =>
                            handleInputChange(index, "quantity", e.target.value)
                          }
                        />
                      </td>
                      <td className="py-1 px-1 text-left">
                        <input
                          className="border rounded-lg px-1 py-1"
                          type="number"
                          min="0"
                          value={row.unit}
                          onChange={(e) =>
                            handleInputChange(index, "unit", e.target.value)
                          }
                        />
                      </td>

                      <td className="py-1 px-1 text-left">
                        <input
                          className="border rounded-lg px-1 py-1"
                          type="number"
                          min="0"
                          value={row.discount}
                          onChange={(e) =>
                            handleInputChange(index, "discount", e.target.value)
                          }
                        />
                      </td>
                      <td className="py-1 px-1 text-left">
                        <input
                          className="border rounded-lg px-1 py-1"
                          type="number"
                          min="0"
                          value={row.rpu}
                          onChange={(e) =>
                            handleInputChange(index, "rpu", e.target.value)
                          }
                        />
                      </td>
                      <td className="py-1 px-1 text-left">
                        <input
                          className="border rounded-lg px-1 py-1"
                          type="number"
                          min="0"
                          value={row.net}
                          onChange={(e) =>
                            handleInputChange(index, "net", e.target.value)
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="sticky bottom-0 bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <tr>
                    <td
                      colSpan="6"
                      className="text-right p-1 border border-gray-300"
                    >
                      Total
                    </td>
                    <td className="p-1 border border-gray-300">{totalNet}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </form>
        <div className="flex justify-around mt-2">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            onClick={addRow}
          >
            Add Row
          </button>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Confirm
          </button>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 w-20 rounded">
            Upload Invoice
          </button>
        </div>
      </div>
    </>
  );
}

export default PurchaseForm;
