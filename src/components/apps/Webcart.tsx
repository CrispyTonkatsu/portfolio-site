import { useEffect, useState } from "react";
import init from "webcart";

export default function Webcart() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadWasm() {
      try {
        await init();

        if (isMounted) {
          setIsLoading(false);
        }
      }
      catch (error) {
        console.error("Failed to load webcart: ", error);
      }
    }

    loadWasm();

    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <div>
      {
        isLoading
          ? <div className="font-bold"> Loading Demo</div>
          : <canvas
            id="webcart-canvas"
            className="w-full h-full block"
          />
      }
    </div>
  );
}
