"use client";

import React from "react";
import Image from "next/image";
import HomeIcon from "@/public/HomeIcon.svg";
import DiscoverIcon from "@/public/DiscoverIcon.svg";
import Link from "next/link";
export default function NavButtons() {
  return (
    <div className="flex flex-col gap-14">
      <Link href={"/home"} className="flex flex-row">
        <Image src={HomeIcon} alt={"Home icon"} />
        <h3 className="text-white font-inter text-2xl font-semibold ml-5">
          Home
        </h3>
      </Link>

      <Link href={"/discover"} className="flex flex-row">
        <Image src={DiscoverIcon} alt={"Discover Icon"} />
        <h3 className="text-white font-inter text-2xl font-semibold ml-5">
          Discover
        </h3>
      </Link>
    </div>
  );
}
