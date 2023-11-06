"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import SearchIcon from "@/public/search-icon.svg";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/results?search=" + search);
    console.log(search);
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-96 w-full">
      <div className="flex w-full p-2.5 h-10 flex-shrink-0 rounded-full bg-white">
        <Image src={SearchIcon} alt={"Search icon"} />
        <input
          className="ml-4 focus:outline-none"
          onChange={handleChange}
          type="text"
          placeholder="Search movie titles"
          name="search"
        />
      </div>
    </form>
  );
}
