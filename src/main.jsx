import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import "../index.css";
import Lenis from "@studio-freight/lenis";
// in main.jsx or App.jsx
import { SurveyProvider } from "./context/surveyContext";

function AppWrapper() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SurveyProvider>
      <AppWrapper />
    </SurveyProvider>
  </React.StrictMode>
);
