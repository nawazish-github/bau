import React, { useEffect, useState } from "react";

function Dashboard() {
  const [services, setServices] = useState("");

  useEffect(() => {
    fetch("http://localhost:3333/bau/services")
      .then((response) => {
        // console.log("the respose is:", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Server response was not ok");
        }
      })
      .then((data) => {
        // console.log("the data is:", data);
        if (data.status === "success") {
          setServices(data.services);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-24 bg-yellow-200">
        <div className="font-bold text-xl">Dashboard</div>
      </div>
      <div className="w-full flex justify-evenly items-center mt-16">
        {services &&
          services.map((services, index) => (
            <div key={index}>
              <button
                type="button"
                className="bg-green-300 rounded-xl p-8 pl-12 pr-12 shadow-lg shadow-green-500 font-bold"
              >
                {services[0].toUpperCase() + services.slice(1)}
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default Dashboard;
