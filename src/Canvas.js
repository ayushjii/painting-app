import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  },[]);

  return (
    <canvas
    className="bg-white max-w-full w-10"
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}