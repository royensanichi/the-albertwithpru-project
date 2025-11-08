export const surveyConfig = {
  questions: [
    {
      id: "hasInsurance",
      question: "Apakah Anda sudah memiliki asuransi pribadi?",
      type: "choice",
      options: ["Ya", "Tidak"],
      next: (answer) => (answer === "ya" ? "insuranceDuration" : "helpType"),
    },
    {
      id: "insuranceDuration",
      question: "Sudah berapa tahun Anda memiliki asuransi tersebut?",
      type: "choice",
      options: ["< 2 tahun", "2-5 tahun", "> 6 tahun"],
      next: () => "understandInsurance",
    },
    {
      id: "understandInsurance",
      question: "Apakah Kamu mengerti Asuransi yang kamu miliki sekarang?",
      type: "choice",
      options: ["Ya", "Tidak"],
      next: (answer) => (answer === "ya" ? "insuranceType" : "reviewHelp"),
    },
    {
      id: "insuranceType",
      question: "Pilih jenis asuransi kamu:",
      type: "choice",
      options: ["Kesehatan", "Jiwa", "UnitLink"],
      next: () => "end",
      topik: "review polis asuransi",
    },
    {
      id: "reviewHelp",
      question: "Apakah kamu butuh bantuan untuk review polis?",
      type: "choice",
      options: ["Ya", "Tidak"],
      next: () => "end",
      topik: (answer) =>
        answer === "ya" ? "review polis asuransi" : "tanya-tanya asuransi",
    },
    {
      id: "helpType",
      question: "Pilih bantuan yang Anda butuhkan:",
      type: "choice",
      options: [
        "Tanya-tanya terkait asuransi",
        "Bantuan Klaim",
        "Buat Asuransi",
        "Saran / Masukan",
      ],
      next: () => "end",
      topik: (answer) => {
        if (answer === "buat asuransi") return "berapa harga premi saya";
        if (answer === "bantuan klaim") return "bantuan klaim";
        if (answer === "saran / masukan") return "saran / masukan";
        return "tanya-tanya asuransi";
      },
    },
  ],
};
