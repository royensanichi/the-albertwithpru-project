export const surveyConfig = {
  questions: [
    {
      id: "hasInsurance",
      question: "Apakah Anda sudah memiliki asuransi pribadi?",
      type: "choice",
      options: ["Ya", "Tidak"],
      next: (answer) => (answer === "ya" ? "insuranceCompany" : "helpType"),
    },
        {
      id: "insuranceCompany",
      question: "Merk asuransi apa yang Anda miliki?",
      type: "choice",
      options: ["Prudential", "Allianz", "Zurich", "Generali", "SunLife", "Lainnya"],
      next: () => "insuranceDuration",
    },
    {
      id: "insuranceDuration",
      question: "Sudah berapa tahun Anda memiliki asuransi tersebut?",
      type: "choice",
      options: ["< 2 tahun", "2-5 tahun", "> 5 tahun"],
      next: () => "understandInsurance",
    },
    {
      id: "understandInsurance",
      question: "Apakah Kamu mengerti Asuransi yang kamu miliki sekarang?",
      type: "choice",
      options: ["Ya", "Tidak", "Mungkin"],
      next: (answer) => (answer === "ya" ? "insuranceType" : "reviewHelp"),
    },
    {
      id: "insuranceType",
      question: "Pilih jenis asuransi kamu:",
      type: "choice",
      options: ["Kesehatan", "Jiwa", "UnitLink"],
      next: () => "helpType",
      // topik: "review polis asuransi",
    },
    {
      id: "reviewHelp",
      question: "Apakah kamu tertarik untuk review polis ? dengan review polis kami bisa bantu kamu untuk mengerti asuransi yang kamu miliki saat ini",
      type: "choice",
      options: ["Ya", "Tidak, ingin tanya-tanya terkait asuransi"],
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
        "Cek Harga / Premi Asuransi",
        "Saran / Masukan",
      ],
      next: () => "end",
      topik: (answer) => {
        if (answer === "cek harga / premi asuransi") return "berapa harga premi saya";
        if (answer === "bantuan klaim") return "bantuan klaim";
        if (answer === "saran / masukan") return "saran/masukan";
        return "tanya-tanya asuransi";
      },
    },
  ],
};
