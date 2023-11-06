import React from "react";
import BurgerButton from "../../components/burgerButton";
export default function MobileTop() {
  return (
    <div className="md:hidden flex justify-center justify-between mb-6">
      <h2 className="text-white text-2xl font-semibold">Movies</h2>
      <BurgerButton />
    </div>
  );
}
