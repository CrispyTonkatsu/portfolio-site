import { useEffect } from "react";
import init, { main } from "webcart";

export default function Webcart() {
  useEffect(() => {
    const canvasElement = document.getElementById("webcart-canvas");

    if (!canvasElement) {
      console.warn("Canvas not found yet, retrying...");
      return;
    }

    async function startWasm() {
      try {
        await init();
        main();
      } catch (error) {
        console.error("Failed to start wasm: ", error)
      }
    }

    startWasm();
  }, [])


  return (
    <div>
      Demo moment
      <canvas
        id="webcart-canvas"
        className="w-full h-full block"
      />
    </div>
  );
}
