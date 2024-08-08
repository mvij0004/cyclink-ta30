import React from "react";
import Navbar from "../components/Navbar.js";
import MapboxMap from "../components/MapboxMap.js";
import Footer from "../components/Footer.js";

const RouteIn = () => {
  const isRoutePage = window.location.pathname === "/route";
  console.log("Is route page:", isRoutePage);
  console.log("Current path:", window.location.pathname);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-10 w-full backdrop-blur-sm bg-blur-3xl sm:-top-80">
        <div className="relative z-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <Navbar />
          <h1 className="text-white text-6xl font-bold py-36 rounded-md">
            Explore safety route in CBD{" "}
            <span className="mt-6 text-lg font-light leading-8 text-white">
              <br />
              Empowering cyclists with safe routes and incident updates for a
              worry-free ride.
            </span>
          </h1>
        </div>
        <div className="z-10 w-full max-w-screen-xl mx-auto bg-white shadow-md border border-zinc-300 rounded-md p-4 my-4 items-center">
          <div className="flex justify-center items-center w-full h-full">
            <MapboxMap showDirections={isRoutePage} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RouteIn;
