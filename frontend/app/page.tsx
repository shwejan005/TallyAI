"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios"; // Fix: Import axios
import { Button } from "@/components/ui/button";
import { ColorSwatch, Group } from "@mantine/core";
import { SWATCHES } from "@/constants";

interface GeneratedResult {
  expression: string;
  answer: string;
}

const Page = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#050000");
  const [reset, setReset] = useState(false);
  const [result, setResult] = useState<GeneratedResult>();
  const [dictOfVars, setDictOfVars] = useState({});

  const sendData = async () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const response = await axios({
        method: "post",
        url: `${import.meta.env.VITE_API_URL}/calculate`,
        data: {
          image: canvas.toDataURL("image/png"),
          dict_of_vars: dictOfVars,
        },
      });
      // Handle the response as needed
      console.log(response.data);
    }
  };

  useEffect(() => {
    if (reset) {
      resetCanvas();
      setReset(false);
    }
  }, [reset]); // Fix: Add dependency array to avoid unnecessary rerender

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - canvas.offsetTop;
        ctx.lineCap = "round";
        ctx.lineWidth = 3;
      }
    }
  }, []); // Only run on mount

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.background = "white";
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
      }
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return;
    }
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.strokeStyle = color; // Fix: Use the selected color
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
      }
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <Button onClick={() => setReset(true)} variant="default" className="bg-black text-white">
          Reset
        </Button>
        <Button onClick={sendData} variant="default" className="bg-blue-500 text-white">
          Send Data
        </Button>
        <Group className="z-20 justify-center space-x-2"> {/* Added justify-center and space-x-2 */}
          {SWATCHES.map((swatchColor: string) => (
            <ColorSwatch
              key={swatchColor}
              color={swatchColor}
              onClick={() => setColor(swatchColor)}
              style={{ cursor: "pointer" }} // Added cursor pointer for better UX
            />
          ))}
        </Group>
      </div>
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute top-0 left-0 w-full h-full"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
    </div>
  );
};

export default Page;
