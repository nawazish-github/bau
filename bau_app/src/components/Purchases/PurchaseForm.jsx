import React, { useState } from "react";
import InputField from "../loginComponents/InputField/InputField";
import Button from "../loginComponents/Button/Button";
import { MdDeleteForever } from "react-icons/md";

function PurchaseForm() {
  const [data, setData] = useState([
    { name: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
  ]);

  const [vendorDetails, setVendorDetails] = useState({
    vendorName: "",
    invoiceNo: "",
    gstNo: "",
    tinNo: "",
    contactNo: "",
    address: "",
  });

  const [isPreview, setIsPreview] = useState(false);
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Handle lineItem change
  const handleLineItemChange = (index, columnName, value) => {
    const newData = [...data];
    // const isNumericColumn = ["quantity", "discount", "net", "rpu"].includes(
    //   columnName
    // );
    newData[index][columnName] = value;
    const quantity = parseFloat(newData[index].quantity) || 0;
    const rpu = parseFloat(newData[index].rpu) || 0;
    const discount = parseFloat(newData[index].discount) || 0;

    const grossAmount = quantity * rpu;
    const netAmount = grossAmount - (grossAmount * discount) / 100;

    newData[index].net = netAmount.toFixed(2); 
    setData(newData);
  };

  // Handle vendorDetails change
  const handleVendorDetailsChange = (e) => {
    const { name, value } = e.target;
    setVendorDetails({ ...vendorDetails, [name]: value });
  };

  // Function to add a new row
  const addRow = (e) => {
    e.preventDefault();
    setData([
      ...data,
      { name: "", quantity: "", unit: "", discount: "", rpu: "", net: "" },
    ]);
  };

  // Function to delete a row
  const deleteRow = (index) => {
    setData(data.filter((_, rowIndex) => rowIndex !== index));
  };

  // Calculate total net amount
  const totalNet = data.reduce((total, row) => {
    return total + (parseFloat(row.net) || 0);
  }, 0);

  //Handle confirm
  const handleConfirm = () => {
    setIsPreview(true);
  };

  // State for selected files
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Function to handle file selection
  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  // Function to trigger file input click event
  const handleAttachInvoice = () => {
    document.getElementById("fileInput").click();
  };

  // Handle edit
  const handleEdit = () => {
    setIsPreview(false);
  };

  // Add serial number to each lineItem
  const lineItesmWithSerialNumber = (data.map((item, index)=>({slNo:index+1, ...item})))

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      date: date,
      vendorDetails: vendorDetails,
      lineItems: lineItesmWithSerialNumber,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));

    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("file", selectedFiles[i]);
      }
    }
    fetch("http://localhost:3333/bau/services/purchase", {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      body: formData,
    })
      .then((response) => {
        console.log("the response is: ", response);
        if (response.ok) {
          return response;
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("the data is: ", data);
      })
      .catch((error) => {
        console.error("the error is: ", error);
      });
  };
 
  return (
    <>
      <div className="bg-gray-300 h-[29.45rem]">
        <form autoComplete="on">
          <div className="flex justify-evenly ">
            <div>
              <label htmlFor="vendorName">Vendor Name</label>
              {isPreview ? (
                <div className="text-center border">
                  {vendorDetails.vendorName}
                </div>
              ) : (
                <InputField
                  type="text"
                  name="vendorName"
                  id="vendorName"
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
                <div className="text-center border">
                  {vendorDetails.invoiceNo}
                </div>
              ) : (
                <InputField
                  type="text"
                  name="invoiceNo"
                  id="invoiceNo"
                  value={vendorDetails.invoiceNo}
                  onChange={handleVendorDetailsChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500"
                  required
                />
              )}
            </div>
            <div>
              <label htmlFor="vendorName">GST No. </label>
              {isPreview ? (
                <div className="text-center border">{vendorDetails.gstNo}</div>
              ) : (
                <InputField
                  type="text"
                  name="gstNo"
                  id="gstNo"
                  value={vendorDetails.gstNo}
                  onChange={handleVendorDetailsChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500"
                  required
                />
              )}
            </div>
          </div>
          <div className="flex justify-evenly ">
            <div>
              <label htmlFor="vendorName">TIN No. </label>
              {isPreview ? (
                <div className="text-center border">{vendorDetails.tinNo}</div>
              ) : (
                <InputField
                  type="text"
                  name="tinNo"
                  id="tinNo"
                  value={vendorDetails.tinNo}
                  onChange={handleVendorDetailsChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500"
                  required
                />
              )}
            </div>
            <div>
              <label htmlFor="vendorName">Contact No.</label>
              {isPreview ? (
                <div className="text-center border">
                  {vendorDetails.contactNo}
                </div>
              ) : (
                <InputField
                  type="number"
                  name="contactNo"
                  id="contactNo"
                  value={vendorDetails.contactNo}
                  onChange={handleVendorDetailsChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500"
                  required
                />
              )}
            </div>
            <div>
              <label htmlFor="vendorName">Date </label>
              {isPreview ? (
                <div className="text-center border">{date}</div>
              ) : (
                <InputField
                  type="date"
                  name="date"
                  id="date"
                  value={date}
                  onChange={handleDateChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500 w-[11.8rem]"
                  required
                />
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <label htmlFor="vendorName" className="flex">
                Address
              </label>
              {isPreview ? (
                <div className="text-center border">
                  {vendorDetails.address}
                </div>
              ) : (
                <textarea
                  cols="40"
                  rows="2"
                  type="text"
                  name="address"
                  id="address"
                  value={vendorDetails.address}
                  onChange={handleVendorDetailsChange}
                  className="border border-gray-300 p-0.5 focus:outline-none focus:border-indigo-500"
                  required
                  autoComplete="address"
                ></textarea>
              )}
            </div>
          </div>
          <div className="overflow-x-auto mt-4">
            <div className="max-h-[11.42rem] overflow-auto">
              <table className="min-w-full table-auto">
                {/* Table headers */}
                <thead className="sticky top-0 bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-1 px-2 bg-red-300">SL No</th>
                    <th className="py-1 px-2 bg-blue-300">Item Name</th>
                    <th className="py-1 px-2 bg-green-300">Quantity</th>
                    <th className="py-1 px-2 bg-yellow-300">Unit</th>
                    <th className="py-1 px-2 bg-pink-300">Discount</th>
                    <th className="py-1 px-2 bg-cyan-300">Rate Per Unit</th>
                    <th className="py-1 px-2 bg-orange-300" colSpan="2">Net</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {data.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-200"
                    >
                      <td className="py-0.5 px-1 text-center whitespace-nowrap w-12">
                        <div>{index + 1}</div>
                      
                      </td>
                      <td className="py-0.5 px-1 text-center w-32">
                        {isPreview ? (
                          <div className="">{row.name}</div>
                        ) : (
                          <InputField
                            className="border rounded px-1 py-0.5 text-center"
                            type="text"
                            name={`name-${index}`}
                            id={`name-${index}`}
                            value={row.name}
                            onChange={(e) =>
                              handleLineItemChange(
                                index,
                                "name",
                                e.target.value
                              )
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
                            name={`quantity-${index}`}
                            id={`quantity-${index}`}
                            value={row.quantity}
                            onChange={(e) =>
                              handleLineItemChange(
                                index,
                                "quantity",
                                e.target.value
                              )
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
                            type="text"
                            name={`unit-${index}`}
                            id={`unit-${index}`}
                            value={row.unit}
                            onChange={(e) =>
                              handleLineItemChange(
                                index,
                                "unit",
                                e.target.value
                              )
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
                            name={`discount-${index}`}
                            id={`discount-${index}`}
                            value={row.discount}
                            onChange={(e) =>
                              handleLineItemChange(
                                index,
                                "discount",
                                e.target.value
                              )
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
                            name={`rpu-${index}`}
                            id={`rpu-${index}`}
                            value={row.rpu}
                            onChange={(e) =>
                              handleLineItemChange(index, "rpu", e.target.value)
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
                            name={`net-${index}`}
                            id={`net-${index}`}
                            value={row.net}
                            onChange={(e) =>
                              handleLineItemChange(index, "net", e.target.value)
                            }
                            required
                          />
                        )}
                      </td>
                      <td className="py-0.5 px-1 text-center w-0">{isPreview?"":<button onClick={()=>deleteRow(index)} className="text-2xl"><MdDeleteForever /></button>}</td>
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
                    <td className="p-1 border border-gray-300 text-center" colSpan="2">{totalNet}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </form>
        {/* Action buttons */}
        {!isPreview && (
          <>
            <div className="flex justify-evenly mt-2">
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
                onClick={handleAttachInvoice}
                label="Attach Invoice"
              />
              {/* File input */}
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                multiple
              />
              {/* Display selected files with names */}
              <div className="flex flex-col mt-1.5 max-h-10 overflow-y-auto ml-[-4rem]">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Selected File ${index + 1}`}
                      className="h-10"
                    />
                    <span>{file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
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
