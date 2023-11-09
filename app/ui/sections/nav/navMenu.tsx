import React from "react";
import NavButtons from "../../components/navButtons";

export default function NavMenu() {
  return (
    <nav className="bg-nav fixed h-full w-5/6 top-0 left-0 z-50 p-10">
      <div className="mt-20">
        <NavButtons />
      </div>
    </nav>
  );
}
