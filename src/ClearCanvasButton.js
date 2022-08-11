import React from "react";
import { useCanvas } from "./CanvasContext";
import { AiOutlineClear } from "react-icons/ai";

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  return (
    <button onClick={clearCanvas} className="bg-white mb-7 rounded ml-16">
      <AiOutlineClear size={40} />
    </button>
  );
};
