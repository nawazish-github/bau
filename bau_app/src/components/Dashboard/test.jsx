// DASHBOARD ORIGENAL CODE

import React, { useEffect, useState } from "react";
import Button from "../loginComponents/Button/Button";
import OutletTitle from "../OutletTitle";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [services, setServices] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3333/bau/services")
      .then((response) => {
        console.log("the respose is:", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Server response was not ok");
        }
      })
      .then((data) => {
        console.log("the data is:", data);
        if (data.status === "success") {
          setServices(data.services);
        }
      })
      .catch((error) => {
        console.error("the erroe is: ", error);
      });
  }, []);

  const handleButtonClick = (service) => {
    // console.log(service);
    service === "purchases" ? Navigate(service) : "";
  };

  return (
    <>
      <div className="w-full h-screen">
        <img src="../src/assets/dashboard_img.jpg" alt="" />
        <div>
          <OutletTitle
            title="Dashboard"
            className=" bg- w-full font-semibold text-xl h-10 flex justify-center items-center"
          />
        </div>
        <div className="flex justify-center mt-32">
          <div className="grid grid-cols-3 gap-x-48 gap-y-16">
            {services &&
              services.map((service, index) => (
                <Button
                  key={index}
                  type="button"
                  label={service[0].toUpperCase() + service.slice(1)}
                  onClick={() => handleButtonClick(service)}
                  className={`bg-gray-300 shadow-gray-500 shadow-lg w-40 h-28 flex justify-center items-center rounded-xl font-bold ${
                    service === "sales"
                      ? "bg-lime-300 shadow-lime-500"
                      : service === "purchases"
                      ? "bg-teal-300 shadow-teal-500"
                      : service === "inventory"
                      ? "bg-rose-300 shadow-rose-500"
                      : ""
                  }`}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
