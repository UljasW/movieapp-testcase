"use client";
import React, { useState } from "react";
import Image from "next/image";
import BurgerIcon from "@/public/menu-icon.svg";

export default function BurgerButton() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-center items-center">
      <Image
        className="w-12 h-6"
        onClick={handleClick}
        src={BurgerIcon}
        alt={"Burger icon"}
      />
    </div>
  );
}
