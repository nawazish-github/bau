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
        console.log("the response is:", response);
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
        console.error("the error is: ", error);
      });
  }, []);

  const handleButtonClick = (service) => {
    service === "purchases" ? Navigate(service) : "";
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('../src/assets/dashboard_image1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      {/* Optional overlay */}
      {/* OutletTitle with Blur */}
      <div className="">
        <div className="text-white text-3xl font-semibold backdrop-blur-sm bg-white/30 p-4 shadow-lg flex justify-center items-center">
          <OutletTitle title="Dashboard" />
        </div>
      </div>
      {/* Button Grid */}
      <div className=" flex justify-center mt-20">
        <div className="grid grid-cols-3 gap-x-32">
          {services &&
            services.map((service, index) => (
              <Button
                key={index}
                type="button"
                label={service[0].toUpperCase() + service.slice(1)}
                onClick={() => handleButtonClick(service)}
                className={`w-40 h-40 rounded-xl font-bold text-lg text-gray-800 flex justify-center items-center transition duration-300 ease-in-out transform hover:scale-105 ${
                  service === "sales"
                    ? "backdrop-blur-sm bg-white/70 shadow-md shadow-white"
                    : service === "purchases"
                    ? "backdrop-blur-sm bg-white/70 shadow-md shadow-white"
                    : service === "inventory"
                    ? "backdrop-blur-sm bg-white/70 shadow-md shadow-white"
                    : "bg-gray-300 shadow-md shadow-gray-500"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
