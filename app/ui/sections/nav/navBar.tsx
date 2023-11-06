import React from "react";
import NavButtons from "../../components/navButtons";
export default function Navbar() {
  return (
    <div className="w-72 p-10 shadow-custom hidden md:block navColor">
      <div className="flex justify-center items-center">
        <h2 className="text-white text-2xl font-semibold">Movies</h2>
      </div>
      <div className="flex justify-center items-center h-full">
        <NavButtons />
      </div>
    </div>
  );
}
