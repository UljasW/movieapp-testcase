"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BurgerIcon from "@/public/menu-icon.svg";
import CloseIcon from "@/public/union.svg";
import NavMenu from "../sections/nav/navMenu";
import { usePathname } from "next/navigation";

export default function BurgerButton() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="flex justify-center items-center">
      {open ? (
        <Image
          className="w-12 h-6"
          onClick={handleClick}
          src={CloseIcon}
          alt={"Close icon"}
        />
      ) : (
        <Image
          className="w-12 h-6"
          onClick={handleClick}
          src={BurgerIcon}
          alt={"Burger icon"}
        />
      )}

      {open && <NavMenu />}
    </div>
  );
}
