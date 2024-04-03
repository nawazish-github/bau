import React, { useState } from "react";
import InputField from "../loginComponents/InputField/InputField";
import Button from "../loginComponents/Button/Button";

function PurchaseForm() {
  const [data, setData] = useState([
    { itemName: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
    { itemName: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
    { itemName: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
    { itemName: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
    { itemName: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
  ]);

  const [vendorDetails, setVendorDetails] = useState({
    vendorName: "",
    invoiceNo: "",
    gstNo: "",
    tin: "",
    contact: "",
    address: "",
  });

  const [isPreview, setIsPreview] = useState(false);

  const handleChange = (index, columnName, value) => {
    const newData = [...data];
    newData[index][columnName] = value;
    setData(newData);
  };

  const handleVendorDetailsChange = (e) => {
    const { name, value } = e.target;
    setVendorDetails({ ...vendorDetails, [name]: value });
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

  const handleConfirm = () => {
    setIsPreview(true);
  };

  const handleUploadInvoice = () => {
    // Add upload invoice logic here
  };

  const handleEdit = () => {
    setIsPreview(false);
  };

  const handleSubmit = () => {
    // Add submit logic here
    console.log([{ vendorDetails }, { data }]);
  };

  return (
    <>
      <div className="bg-gray-300 h-[29.45rem]">
        <form>
          <div className="flex justify-evenly items-center p-2">
            <div className="">
              <label htmlFor="vendorName">Vendor Name</label>
              {isPreview ? (
                <div className="text-center"> {vendorDetails.vendorName}</div>
              ) : (
                <InputField
                  type="text"
                  name="vendorName"
                  value={vendorDetails.vendorName}
                  onChange={handleVendorDetailsChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500"
                  required
                />
              )}
            </div>
            <div>
              <label htmlFor="vendorName">Invoice No.</label>
              {isPreview ? (
                <div className="text-center">{vendorDetails.invoiceNo}</div>
              ) : (
                <InputField
                  type="text"
                  name="invoiceNo"
                  value={vendorDetails.invoiceNo}
                  onChange={handleVendorDetailsChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500"
                  required
                />
              )}
            </div>
            <div>
              <label htmlFor="vendorName">GST NO. </label>
              {isPreview ? (
                <div className="text-center">{vendorDetails.gstNo}</div>
              ) : (
                <InputField
                  type="text"
                  name="gstNo"
                  value={vendorDetails.gstNo}
                  onChange={handleVendorDetailsChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500"
                  required
                />
              )}
            </div>
          </div>
          <div className="flex justify-evenly items-center p-2 ">
            <div className="">
              <label htmlFor="vendorName">TIN </label>
              {isPreview ? (
                <div className="text-center">{vendorDetails.tin}</div>
              ) : (
                <InputField
                  type="text"
                  name="tin"
                  value={vendorDetails.tin}
                  onChange={handleVendorDetailsChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500"
                  required
                />
              )}
            </div>
            <div className="">
              <label htmlFor="vendorName">Contact </label>
              {isPreview ? (
                <div className="text-center">{vendorDetails.contact}</div>
              ) : (
                <InputField
                  type="text"
                  name="contact"
                  value={vendorDetails.contact}
                  onChange={handleVendorDetailsChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500"
                  required
                />
              )}
            </div>
            <div>
              <label htmlFor="vendorName" className="flex">
                Address{" "}
              </label>
              {isPreview ? (
                <div className="text-center">{vendorDetails.address}</div>
              ) : (
                <textarea
                  cols="22"
                  rows="2"
                  type="text"
                  name="address"
                  value={vendorDetails.address}
                  onChange={handleVendorDetailsChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500"
                  required
                ></textarea>
              )}
            </div>
          </div>
          <div className="overflow-x-auto mt-4">
            <div className="max-h-[13.4rem] overflow-auto">
              <table className="min-w-full table-auto">
                {/* Table headers */}
                <thead className="sticky top-0 bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-1 px-2">SL No</th>
                    <th className="py-1 px-2">Item Name</th>
                    <th className="py-1 px-2">Quantity</th>
                    <th className="py-1 px-2">Unit</th>
                    <th className="py-1 px-2">Discount</th>
                    <th className="py-1 px-2">Rate Per Unit</th>
                    <th className="py-1 px-2">Net</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {data.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-200"
                    >
                      <td className="py-0.5 px-1 text-center whitespace-nowrap w-12">
                        {index + 1}
                      </td>
                      <td className="py-0.5 px-1 text-center w-32">
                        {isPreview ? (
                          <div className="">{row.itemName}</div>
                        ) : (
                          <InputField
                            className="border rounded px-1 py-0.5 text-center"
                            type="text"
                            value={row.itemName}
                            onChange={(e) =>
                              handleChange(index, "itemName", e.target.value)
                            }
                            required
                          />
                        )}
                      </td>
                      <td className="py-0.5 px-1 text-center w-32">
                        {isPreview ? (
                          <div className="">{row.quantity}</div>
                        ) : (
                          <InputField
                            className="border rounded px-1 py-0.5 text-center w-3/5"
                            type="number"
                            value={row.quantity}
                            onChange={(e) =>
                              handleChange(index, "quantity", e.target.value)
                            }
                            required
                          />
                        )}
                      </td>
                      <td className="py-0.5 px-1 text-center w-32">
                        {isPreview ? (
                          <div className="">{row.unit}</div>
                        ) : (
                          <InputField
                            className="border rounded px-1 py-0.5 text-center w-3/5"
                            type="number"
                            value={row.unit}
                            onChange={(e) =>
                              handleChange(index, "unit", e.target.value)
                            }
                            required
                          />
                        )}
                      </td>
                      <td className="py-0.5 px-1 text-center w-32">
                        {isPreview ? (
                          <div className="">{row.discount}</div>
                        ) : (
                          <InputField
                            className="border rounded px-1 py-0.5 text-center w-3/5"
                            type="number"
                            value={row.discount}
                            onChange={(e) =>
                              handleChange(index, "discount", e.target.value)
                            }
                            required
                          />
                        )}
                      </td>
                      <td className="py-0.5 px-1 text-center w-32">
                        {isPreview ? (
                          <div className="">{row.rpu}</div>
                        ) : (
                          <InputField
                            className="border rounded px-1 py-0.5 text-center w-3/5 "
                            type="number"
                            value={row.rpu}
                            onChange={(e) =>
                              handleChange(index, "rpu", e.target.value)
                            }
                            required
                          />
                        )}
                      </td>
                      <td className="py-0.5 px-1 text-center w-32">
                        {isPreview ? (
                          <div className="">{row.net}</div>
                        ) : (
                          <InputField
                            className="border rounded px-1 py-0.5 text-center w-3/5"
                            type="number"
                            value={row.net}
                            onChange={(e) =>
                              handleChange(index, "net", e.target.value)
                            }
                            required
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* Table footer */}
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
        {/* Action buttons */}
        {!isPreview && (
          <div className="flex justify-around mt-2">
            <Button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
              onClick={addRow}
              label="Add Row"
            />
            <Button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              onClick={handleConfirm}
              label="Confirm"
            />
            <Button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5  rounded w-20"
              onClick={handleUploadInvoice}
              label="Upload Invoice"
            />
          </div>
        )}
        {isPreview && (
          <div className="flex justify-around mt-2">
            <Button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              onClick={handleEdit}
              label="Edit"
            />
            <Button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              onClick={handleSubmit}
              label="Submit"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default PurchaseForm;
