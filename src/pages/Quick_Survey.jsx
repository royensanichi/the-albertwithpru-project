import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { surveyConfig } from "../config/surveyConfig";
import { useSurvey } from "../context/surveyContext";
import logoBg from "../assets/albertwithpru_transparent.png";

const Quick_Survey = () => {
  const navigate = useNavigate();
  const { surveyData, updateSurveyData } = useSurvey();
  const [currentId, setCurrentId] = useState("hasInsurance");

  const question = surveyConfig.questions.find((q) => q.id === currentId);

  const handleAnswer = (answer) => {
    const normalized = answer.toLowerCase();
    updateSurveyData(question.id, normalized);

    if (question.topik) {
      const topik =
        typeof question.topik === "function"
          ? question.topik(normalized)
          : question.topik;
      updateSurveyData("topik", topik);
    }

    const nextId =
      typeof question.next === "function"
        ? question.next(normalized)
        : question.next;

    if (nextId === "end") {
      navigate("/", { state: surveyData });
      const offset = window.innerWidth <= 768 ? 1000 : 1150;
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight - offset,
          behavior: "smooth",
        });
      }, 1500);
    } else {
      setCurrentId(nextId);
    }
  };

  const variants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  return (
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden bg-gradient-to-b from-white via-white to-red-800">
      {/* Background logo */}
      <img
        src={logoBg}
        alt="Background Logo"
        className="absolute inset-0 m-auto w-[50%] max-w-none opacity-20 object-contain pointer-events-none"
      />

      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 px-4 py-2 bg-white/70 backdrop-blur-sm text-red-700 font-semibold rounded-full shadow hover:bg-white hover:scale-105 transition-all"
      >
        Home
      </button>

      {/* Survey content */}
      <div className="relative w-full max-w-lg p-8 text-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentId}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
              {question.question}
            </h1>
            <div className="flex flex-col gap-4 w-full">
              {question.options.map((opt) => (
                <motion.button
                  key={opt}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(opt)}
                  className="py-3 px-4 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-all"
                >
                  {opt}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quick_Survey;
