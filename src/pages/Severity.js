import React, { useState } from "react";
import Navbar from "../components/Navbar.js";
import MapboxMap from "../components/MapboxMap.js";
import Footer from "../components/Footer.js";
import FilterSeverity from "../components/FilterSeverity.js";

const Severity = () => {
  const isRoutePage = window.location.pathname === "/route";
  const mixUse = true;
  const yearOptions = [
    "All",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const speedZoneOptions = ["All", "30", "40", "50", "60"];
  const accidentTypeOptions = [
    "All",
    "Collision with vehicle",
    "Struck Pedestrian",
    "Collision with a fixed object",
    "No collision and no object struck",
  ];

  const clusterColor = {
    "2 - 99 accidents": "#f1f075",
    ">= 100 accidents": "#51bbd6",
  };

  const severityColor = {
    Low: "#0051ad",
    Medium: "#7900ad",
    High: "#FE0000",
  };

  const [filters, setFilters] = useState({
    year: "All",
    speedZone: "All",
    accidentType: "All",
  });

  const handleFilterChange = (name, value) => {
    console.log(`Updating filter: ${name} to ${value}`);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-10 w-full backdrop-blur-sm bg-blur-3xl sm:-top-80">
        <div className="relative z-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <Navbar />
          <h1 className="text-black text-6xl font-bold py-36 rounded-md">
            Explore safety route in CBD{" "}
            <span className="mt-6 text-lg font-light leading-8 text-gray-900">
              <br />
              Empowering cyclists with safe routes and incident updates for a
              worry-free ride.
            </span>
          </h1>
        </div>

        <div className="z-10 w-full max-w-screen-xl mx-auto bg-white shadow-md border border-zinc-300 rounded-md p-5 my-4 items-center">
          <div className="relative flex justify-center items-center w-full h-full">
            <div className="z-10 w-1/4 absolute top-3 left-3 bg-white p-2 shadow-lg border border-zinc-300 rounded-md">
              <div className="grid grid-rows-6 pb-3">
                <FilterSeverity
                  label="FILTER BY YEAR"
                  options={yearOptions}
                  onChange={(value) => handleFilterChange("year", value)}
                />
                <FilterSeverity
                  label="FILTER BY SPEED ZONE"
                  options={speedZoneOptions}
                  onChange={(value) => handleFilterChange("speedZone", value)}
                />
                <FilterSeverity
                  label="FILTER BY ACCIDENT TYPE"
                  options={accidentTypeOptions}
                  onChange={(value) =>
                    handleFilterChange("accidentType", value)
                  }
                />
                <div className="block text-left">
                  <h2 className="mt-4 text-sm font-medium leading-6 text-gray-900">
                    CLUSTER
                  </h2>
                  {Object.entries(clusterColor).map(([label, color]) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "5px 0",
                      }}
                    >
                      <div
                        style={{
                          width: label === "Bicycle Route" ? "20px" : "20px",
                          height: label === "Bicycle Route" ? "5px" : "20px",
                          backgroundColor: color,
                          marginRight: "10px",
                          borderRadius: label === "Bicycle Route" ? "0" : "50%",
                        }}
                      ></div>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <div className="block text-left">
                  <h2 className="mt-4 text-sm font-medium leading-6 text-gray-900">
                    SEVERITY LEVEL
                  </h2>
                  {Object.entries(severityColor).map(([label, color]) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "5px 0",
                      }}
                    >
                      <div
                        style={{
                          width: label === "Bicycle Route" ? "20px" : "20px",
                          height: label === "Bicycle Route" ? "5px" : "20px",
                          backgroundColor: color,
                          marginRight: "10px",
                          borderRadius: label === "Bicycle Route" ? "0" : "50%",
                        }}
                      ></div>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <MapboxMap
              showDirections={isRoutePage}
              filters={filters}
              mixUse={mixUse}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Severity;
