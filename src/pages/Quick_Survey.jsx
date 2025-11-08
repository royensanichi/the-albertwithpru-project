import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Quick_Survey = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [surveyData, setSurveyData] = useState({}); // simpan jawaban sementara

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleAnswer = (answer) => {
    const offset = window.innerWidth <= 768 ? 1000 : 1150;
    let updatedData = { ...surveyData };

    switch (step) {
      case 0: // Sudah punya asuransi?
        updatedData.hasInsurance = answer === "yes" ? "ya" : "tidak";
        setSurveyData(updatedData);
        if (answer === "yes") setStep(1);
        else setStep(5); // langsung ke bantuan umum
        break;

      case 1: // Sudah berapa tahun?
        updatedData.insuranceDuration = answer;
        setSurveyData(updatedData);
        setStep(2); // lanjut ke pertanyaan pemahaman
        break;

      case 2: // Paham dengan yang punya?
        updatedData.understandInsurance = answer === "yes";
        setSurveyData(updatedData);
        if (answer === "yes") setStep(3);
        else setStep(4);
        break;

      case 3: // Pilih jenis asuransi
        updatedData.insuranceType = answer;
        updatedData.topik = "review polis asuransi";
        setSurveyData(updatedData);
        navigate("/", { state: updatedData });
        setTimeout(() => {
          window.scrollTo({ top: document.body.scrollHeight - offset, behavior: "smooth" });
        }, 2500);
        break;

      case 4: // Mau dibantu review?
        updatedData.topik = answer === "yes" ? "review polis asuransi" : "tanya-tanya asuransi";
        setSurveyData(updatedData);
        navigate("/", { state: updatedData });
        setTimeout(() => {
          window.scrollTo({ top: document.body.scrollHeight - offset, behavior: "smooth" });
        }, 2500);
        break;

      case 5: // Bantuan umum (tidak punya asuransi)
        updatedData.topik =
          answer === "buat asuransi"
            ? "berapa harga premi saya"
            : answer === "bantuan klaim"
            ? "bantuan klaim"
            : answer === "saran / masukan"
            ? "saran / masukan"
            : "tanya-tanya asuransi";
        setSurveyData(updatedData);
        navigate("/", { state: updatedData });
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
        return {
          question: "Sudah berapa tahun Anda memiliki asuransi tersebut?",
          buttons: ["< 2 tahun", "2-5 tahun", "> 6 tahun"],
        };
      case 2:
        return { question: "Apakah Kamu mengerti Asuransi yang kamu miliki sekarang?", buttons: ["Yes", "No"] };
      case 3:
        return { question: "Pilih jenis asuransi kamu:", buttons: ["Kesehatan", "Jiwa", "UnitLink"] };
      case 4:
        return { question: "Apakah kamu butuh bantuan untuk review polis?", buttons: ["Yes", "No"] };
      case 5:
        return {
          question: "Pilih bantuan yang Anda butuhkan:",
          buttons: ["Tanya-tanya terkait asuransi", "Bantuan Klaim", "Buat Asuransi", "Saran / Masukan"],
        };
      default:
        return null;
    }
  };

  const { question, buttons } = renderQuestion();

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
