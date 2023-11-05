import React from "react";
import BurgerButton from "../../components/burgerButton";
import "../../sections.css";
export default function MobileTop() {
  return (
    <div className="mobileTop">
      <h2 className="text-white text-2xl font-semibold">Movies</h2>
      <BurgerButton />
    </div>
  );
}
