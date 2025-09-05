import ListFaq from "./ListFaq";
// import card1 from "../../assets/images/portfolio-images/card-1.png";

const listFaq = [
{
  id: 1,
  question: "Mengapa banyak orang menunda membeli asuransi?",
  answer:
    "Banyak orang merasa asuransi belum mendesak atau terlalu mahal. Padahal, saat risiko datang tiba-tiba, biayanya bisa jauh lebih besar dibandingkan premi asuransi.",
},
{
  id: 2,
  question: "Apa keuntungan memiliki asuransi sejak dini?",
  answer:
    "Premi lebih ringan, perlindungan bisa lebih luas, dan kamu tidak khawatir ditolak karena kondisi kesehatan. Semakin cepat memulai, semakin besar manfaat yang bisa dirasakan.",
},
{
  id: 3,
  question: "Adakah paket asuransi untuk sekeluarga?",
  answer:
    "Ya, ada paket asuransi yang dirancang khusus untuk keluarga.",
},
{
  id: 4,
  question: "Apa yang terjadi jika telat membayar premi?",
  answer:
    "Biasanya ada masa tenggang (grace period) 1 Bulan. Jika melewati masa itu, polis bisa lapse atau tidak aktif. Untuk mengaktifkannya kembali, biasanya perlu proses pemulihan polis.",
},
{
  id: 5,
  question: "Bisakah satu orang punya lebih dari satu polis asuransi?",
  answer:
    "Bisa. Banyak orang memiliki beberapa polis untuk melengkapi kebutuhan berbeda, misalnya asuransi kesehatan, jiwa, dan penyakit kritis agar perlindungan lebih menyeluruh.",
},
{
  id: 6,
  question: "Apa itu masa tunggu dalam asuransi kesehatan?",
  answer:
    `Masa tunggu adalah periode sejak polis aktif hingga manfaat bisa digunakan.\n30 hari untuk seluruh jenis penyakit umum, 90 hari untuk penyakit kanker, dan 1 Tahun untuk 18 penyakit khusus termasuk AIDS / HIV. \n
    untuk KECELAKAAN, TIDAK ADA MASA TUNGGU`,
}
];

const Faq = () => {
  
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Frequently Asked Questions</p>
            <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
              Pertanyaan yang sering ditanyakan seputar layanan kami.
            </p>
        </div>
      </div>
      <div className="mx-auto justify-center">
        {/* <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6"> */}
          {listFaq.map((data, index) => (
            <ListFaq data={data} key={index} />
          ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Faq;
