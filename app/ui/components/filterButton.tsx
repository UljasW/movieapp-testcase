"use client";
import React from "react";

// Add the new props to the interface
interface Props {
  genre: string;
  isActive: boolean;
  setIsActive: () => void;
}

// Destructure the new props in the component function
export default function FilterButton({ genre, isActive, setIsActive }: Props) {
  // Modify the button click handler to call setIsActive
  const toggleButton = () => {
    setIsActive();
  };

  // Modify the className to apply styles based on the isActive prop
  return (
    <button 
      className={`text-white border-white border w-28 md:justify-center md:w-36 flex-shrink-0 h-10 flex justify-center items-center rounded-full text-center text-base font-normal font-bold ${isActive ? 'bg-white text-black' : 'bg-transparent text-white'}`}
      onClick={toggleButton}
    >
      {genre}
    </button>
  );
}
