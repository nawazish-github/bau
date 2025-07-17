import React, { useState } from "react";
import OutletTitle from "../OutletTitle";
import Button from "../loginComponents/Button/Button";
import InputField from "../loginComponents/InputField/InputField";
import PurchaseForm from "./PurchaseForm";
import {Link} from "react-router-dom"

function Purchases() {
  const [searchInvoice, setSearchInvoice] = useState(false);
  const [invoiceNum, setInvoiceNum] = useState("");
  const [invoiceDetails, setInvoiceDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Handle search click
  const handleSearchInvoice = () => {
    setSearchInvoice(true);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInvoiceNum(e.target.value);
  };

  // Handle Go
  const handleGo = (e) => {
    e.preventDefault();
    if (!invoiceNum) return;
    const url = `http://localhost:3333/bau/services/purchase/search?invoiceNumber=${invoiceNum}`;
    fetch(url)
      .then((response) => {
        console.log("The response is:", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log("The data is:", data);
        setInvoiceDetails(data);
        setErrorMessage(null);
      })
      .catch((error) => {
        console.error("The error is:", error);
        setErrorMessage("Failed to fetch invoice details. Please try again.");
        setInvoiceDetails(null);
      });
  };

  return (
    <div className="w-full h-screen flex">
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
      <div className="w-4/5 h-screen">
        <OutletTitle
          title="Purchases"
          className="bg-teal-300 w-full font-semibold text-xl h-10 flex justify-center items-center"
        />
        <div className="w-full h-screen">
          {!searchInvoice ? (
            <>
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
                  onClick={handleSearchInvoice}
                />
              </div>
              <div>
                <PurchaseForm />
              </div>
            </>
          ) : (
            <div>
              {invoiceDetails ? (
                invoiceDetails && (
                  <div className="p-4">
                    <table className="border border-black w-full">
                      <thead className="">
                        <tr className="">
                          <th className="" colSpan="2">Invoice Details</th>
                        </tr>
                      </thead>
                      <tbody className="">
                        <tr className="border border-black">
                          <td className="border border-black">Date</td>
                          <td className="border border-black">{invoiceDetails.date}</td>
                        </tr>
                        <tr>
                          <td className="border border-black">Vendor Name</td>
                          <td className="border border-black">{invoiceDetails.vendorDetails.vendorName}</td>
                        </tr>
                        <tr>
                          <td className="border border-black">Invoice No</td>
                          <td className="border border-black">{invoiceDetails.vendorDetails.invoiceNo}</td>
                        </tr>
                        <tr>
                          <td className="border border-black">GST No</td>
                          <td className="border border-black">{invoiceDetails.vendorDetails.gstNo}</td>
                        </tr>
                        <tr>
                          <td className="border border-black">TIN No</td>
                          <td className="border border-black">{invoiceDetails.vendorDetails.tinNo}</td>
                        </tr>
                        <tr>
                          <td className="border border-black">Contact No</td>
                          <td className="border border-black">{invoiceDetails.vendorDetails.contactNo}</td>
                        </tr>
                        <tr>
                          <td className="border border-black">Address</td>
                          <td className="border border-black">{invoiceDetails.vendorDetails.address}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="border border-black w-full">
                      <thead>
                        <tr>
                          <th className="border border-black">SL No</th>
                          <th>Item Name</th>
                          <th className="border border-black">Quantity</th>
                          <th>Unit</th>
                          <th className="border border-black">Discount</th>
                          <th>Rate Per Unit</th>
                          <th className="border border-black">Net</th>
                        </tr>
                      </thead>
                      <tbody className="max-h-8 overflow-scroll">
                        {invoiceDetails.lineItems.map((item, index)=>(
                          <tr key={index}>
                          <td className="border border-black">{item.slNo}</td>
                          <td className="border border-black">{item.name}</td>
                          <td className="border border-black">{item.quantity}</td>
                          <td className="border border-black">{item.unit}</td>
                          <td className="border border-black">{item.discount}</td>
                          <td className="border border-black">{item.rpu}</td>
                          <td className="border border-black">{item.net}</td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="text-center mt-4">Download Invoice : <Link to="" className="text-blue-500 hover:underline">invoiceDetails.jpg</Link> </div>
                  </div>
                )
              ) : (
                <div className="h-[35.45rem] bg-slate-400 p-8">
                  <div className="flex items-center justify-center gap-x-2 mb-8">
                    <label
                      htmlFor="invoiceNumber"
                      className="text-lg font-medium"
                    >
                      Invoice Number :
                    </label>
                    <InputField
                      type="text"
                      id="invoiceNumber"
                      name="invoiceNumber"
                      placeholder="Enter Invoice Number"
                      value={invoiceNum}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg p-2"
                    />
                    <Button
                      type="button"
                      label="Go"
                      onClick={handleGo}
                      className="bg-green-400 w-16 h-10 rounded-lg"
                    />
                  </div>
                  {errorMessage && (
                    <div className="text-red-500 text-center font-semibold bg-white p-1 rounded text-lg">
                      {errorMessage}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Purchases;
