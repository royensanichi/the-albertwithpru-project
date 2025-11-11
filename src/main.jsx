import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import "../index.css";
import Lenis from "@studio-freight/lenis";
import { SurveyProvider } from "./context/surveyContext";
import { motion, AnimatePresence } from "framer-motion";

function AppWrapper() {
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    // Smooth scroll
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Check device visit
    const VISIT_KEY = "deviceChecked";
    const LAST_VISIT_KEY = "lastVisit";
    const now = new Date();
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
    const fourteenDays = 14 * 24 * 60 * 60 * 1000;
    const isExpired = !lastVisit || now - new Date(lastVisit) > fourteenDays;

    if (isExpired && window.location.pathname !== "/quicksurvey") {
      setRedirecting(true);
      localStorage.setItem(VISIT_KEY, "true");
      localStorage.setItem(LAST_VISIT_KEY, now.toISOString());
      setTimeout(() => {
        window.location.href = "/quicksurvey";
      }, 1000);
    } else {
      localStorage.setItem(LAST_VISIT_KEY, now.toISOString());
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <AnimatePresence>
        {redirecting && (
          <motion.div
            key="redirect-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-gradient-to-b from-white via-white to-red-700 flex items-center justify-center z-[9999]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-white"
            >
              Redirecting to Quick Survey...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SurveyProvider>
      <AppWrapper />
    </SurveyProvider>
  </React.StrictMode>
);
