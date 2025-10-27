import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Quick_Survey = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleAnswer = (answer) => {
    const offset = window.innerWidth <= 768 ? 1000 : 1150; // mobile vs desktop
    switch (step) {
      case 0: // Sudah punya asuransi?
        answer === "yes" ? setStep(1) : setStep(4);
        break;
      case 1: // Paham dengan yang punya?
        answer === "yes" ? setStep(2) : setStep(3);
        break;
      case 2: // Pilih jenis asuransi
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: document.body.scrollHeight - offset, behavior: "smooth" });
        }, 2500);
        break;
      case 3: // Mau dibantu review?
        answer === "yes" ? setStep(5) : setStep(4);
        break;
      case 4: // Bantuan umum
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: document.body.scrollHeight - offset, behavior: "smooth" });
        }, 2500);
        break;
      case 5: // Form Konsultasi
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: document.body.scrollHeight - offset, behavior: "smooth" });
        }, 2500);
        break;
      default:
        break;
    }
  };

  const renderQuestion = () => {
    switch (step) {
      case 0:
        return { question: "Apakah Anda sudah memiliki asuransi pribadi?", buttons: ["Yes", "No"] };
      case 1:
        return { question: "Apakah Kamu mengerti Asuransi yang kamu miliki sekarang ?", buttons: ["Yes", "No"] };
      case 2:
        return { question: "Pilih jenis asuransi kamu:", buttons: ["Kesehatan", "Jiwa", "UnitLink"] };
      case 3:
        return { question: "Apakah kamu butuh bantuan untuk review polis?", buttons: ["Yes", "No"] };
      case 4:
        return {
          question: "Pilih bantuan yang Anda butuhkan:",
          buttons: ["Tanya-tanya terkait asuransi", "Bantuan Klaim", "Buat Asuransi"],
        };
      case 5:
        return { question: "Lanjutkan ke Formulir Konsultasi Gratis?", buttons: ["Submit"] };
      default:
        return null;
    }
  };

  const { question, buttons } = renderQuestion();

  // Motion variants for transitions
  const variants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="w-full max-w-lg p-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-2xl md:text-3xl font-semibold mb-8">{question}</h1>
            <div className="flex flex-col gap-4 w-full">
              {buttons.map((label, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(label.toLowerCase())}
                  className="py-3 px-4 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-all"
                >
                  {label}
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
