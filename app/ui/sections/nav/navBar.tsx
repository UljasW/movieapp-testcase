import React from "react";
import NavButtons from "../../components/navButtons";
import "../../sections.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="flex justify-center items-center">
        <h2 className="text-white text-2xl font-semibold">Movies</h2>
      </div>
      <div className="flex justify-center items-center h-full">
        <NavButtons />
      </div>
    </div>
  );
}
