import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="pt-10 w-full flex justify-center items-center">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto shadow-md border border-zinc-300 rounded-full px-5 py-3 bg-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          <span className="text-green-500 bg-black rounded-xl">C</span>yclink
        </Link>
        {/* Navigation Links */}
        <div className="text-zinc-400 font-bold flex gap-6 items-center">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/incident">Incident</CustomLink>
          <CustomLink to="/route">Route</CustomLink>
          <CustomLink to="/geospatial">Geospatial</CustomLink>
        </div>
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;

  const isActive = path === to;

  return (
    <Link
      to={to}
      {...props}
      className={`${
        isActive ? "bg-green-500 text-white" : "text-black"
      } px-3 py-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300`}
    >
      {children}
    </Link>
  );
}

export default Navbar;
