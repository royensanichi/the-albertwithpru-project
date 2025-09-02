import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import KlaimTemplate from "./KlaimTemplate";
import "./testimonial.css";

import klaim1 from "../../assets/images/klaim/klaim1.webp";
import klaim2 from "../../assets/images/klaim/klaim2.webp";
import klaim3 from "../../assets/images/klaim/klaim3.webp";
import klaim4 from "../../assets/images/klaim/klaim4.webp";
import klaim5 from "../../assets/images/klaim/klaim5.webp";
const klaimData = [
  {
    message:
      "Pria 41 Thn, Sakit DBD, Rawat Inap - FULL COVER 26 Juta rupiah",
      // quote : "Pria 41 Thn, Sakit DBD - FULL COVER 26 Juta",
    // quote: `Menjadi Agen PruVenture; Agen yang dibimbing khusus oleh Prudential untuk menjadi seorang Leader dan mampu untuk mendampingi nasabah-nasabahnya dengan baik.`,
    img:klaim1
    // name: "Esther Howard",
    // designation: "Managing Director, ABC Company",
  },
  {
    message:
            "49 Thn, Operasi Katarak di Jakarta Eye Center - FULL COVER 37.5 Juta rupiah",
    // quote:  "49 Thn, Operasi Katarak di Jakarta Eye Center - FULL COVER 37.5 Juta",
    img:klaim2
    // name: "Ali Haider",
    // designation: "COO, XYZ Company",
  },
        {
    message:
      "24 Thn, Sakit DBD, Rawat Inap 7 Hari - FULL COVER 18 Juta rupiah",
    // quote: `Mengikuti Health Education dengan narasumber dokter dari Singapura untuk memperluas wawasan medis, sehingga dapat memberikan pendampingan yang lebih baik bagi nasabah.`,
    img:klaim3
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },
      {
    message:
      "Ambil Polis Jiwa 2017 dan 2019 sampai 1 Milyar untuk Keluarga Tercinta, Beliau Tutup Usia Tahun 2025.",
    // quote: `Bersama generasi anak-anak muda lainnya untuk mendapatkan edukasi merencanakan masa depan karir dan pentingnya asuransi pribadi.`,
    img:klaim4
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },
  {
    message:
      "ODC Mata di Singapur - FULL COVER 194 Juta rupiah",
    // quote: `Menjalin kerja sama dengan RS Siloam guna meningkatkan pemahaman masyarakat terkait pentingnya asuransi.`,
    img:klaim5
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },

];
const Klaim = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Bukti Klaim Prudential</p>
        <Swiper
          id="klaim"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {klaimData.map((klaim, index) => (
            <SwiperSlide key={index}>
                <img src={klaim.img} className="justify-self-center max-h-192 object-cover rounded-xl" alt={`Klaim ${index}`} />
            <KlaimTemplate klaim={klaim} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Klaim;
