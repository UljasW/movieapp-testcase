"use client";
import React from "react";
interface Props {
  category: string;
}
export default function FilterButton(props: Props) {
  const [isPressed, setIsPressed] = React.useState(false);

  const toggleButton = () => {
    setIsPressed(!isPressed);
  };

  return (
    <button 
      className={`text-white border-white border w-36 h-10 flex justify-center items-center rounded-full text-center text-base font-normal font-bold ${isPressed ? 'bg-white text-black' : 'bg-transparent'}`}
      onClick={toggleButton}
    >
      {props.category}
    </button>
  );
}
