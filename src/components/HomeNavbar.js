import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <nav className="pt-10 w-full flex justify-center items-center p-5">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto shadow-md border border-zinc-300 rounded-full px-5 py-3 bg-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          <span className="text-green-500 bg-black rounded-xl">C</span>yclink
        </Link>
        {/* Navigation Links */}
        <div className="text-zinc-400 font-bold flex gap-6 items-center">
          <NavLink to="#why-cycle" icon="bike-icon.png">Why Cycle?</NavLink>
          <NavLink to="#incidents" icon="incident-icon.png">Incidents</NavLink>
          <NavLink to="#safe-routes" icon="safe-routes-icon.png">Safe Routes</NavLink>
          <NavLink to="#geospatial-map" icon="map-icon.png">Geospatial Map</NavLink>
        </div>
      </div>
    </nav>
  );
};

function NavLink({ to, icon, children }) {
  return (
    <a href={to} className="flex flex-col items-center text-center text-zinc-400 px-3 py-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
      <img src={`${process.env.PUBLIC_URL}/${icon}`} alt={children} className="w-8 h-8 mb-1" />
      <span>{children}</span>
    </a>
  );
}

export default HomeNavbar;
