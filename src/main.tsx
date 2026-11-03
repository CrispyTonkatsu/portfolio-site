import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // TODO: Fix webcart so that it defends against multiple initialization
  <StrictMode>
    <App />
  </StrictMode>
);
