import React from "react";
import NavButtons from "../../components/navButtons";
export default function Navbar() {
  return (
    <nav className="w-72 min-h-screen	p-10 shadow-custom hidden md:block bg-nav">
      <div className="flex justify-center items-center">
        <h2 className="text-white text-2xl font-semibold">Movies</h2>
      </div>
      <div className="flex justify-center items-center h-full">
        <NavButtons />
      </div>
    </nav>
  );
}
