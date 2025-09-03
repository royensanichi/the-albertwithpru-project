import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

import pruuniversity from "../../assets/images/exp/pruuniversity.webp";
import pruactive from "../../assets/images/exp/pruactive.webp";
import empurau from "../../assets/images/exp/emp.webp";
import nextgen from "../../assets/images/exp/nextgen.webp";
import siloam from "../../assets/images/exp/prusiloam.webp";
import web from "../../assets/images/exp/albertwithpruweb.webp";
const testimonialData = [
  {
    message: "2024 : Certified Agen PruVenture",
    quote: `Bersertifikasi sebagai Agen PruVenture; Agen yang dibimbing khusus oleh Prudential untuk menjadi seorang Leader dan mampu untuk mendampingi nasabah-nasabahnya dengan baik.`,
    img: pruuniversity,
    // name: "Esther Howard",
    // designation: "Managing Director, ABC Company",
  },

  {
    message: "2024 : Acara Next-Gen, Karir Opening untuk Generasi Muda",
    quote: `Bersama generasi anak-anak muda lainnya untuk mendapatkan edukasi merencanakan masa depan karir dan pentingnya asuransi pribadi.`,
    img: nextgen,
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },
  {
    message: "2024 : Empurau - Health Education from Singapore",
    quote: `Mengikuti Health Education dengan narasumber dokter dari Singapura untuk memperluas wawasan medis, sehingga dapat memberikan pendampingan yang lebih baik bagi nasabah.`,
    img: empurau,
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },
  {
    message: "2024 : Peserta PruActive FunRun",
    quote: `Mengikuti acara FunRun Prudential bersama kawan-kawan dan para nasabah.`,
    img: pruactive,
    // name: "Ali Haider",
    // designation: "COO, XYZ Company",
  },
  {
    message: "2025 : Kerja sama dengan RS.Siloam Kebun Jeruk",
    quote: `Menjalin kerja sama dengan RS Siloam guna meningkatkan pemahaman masyarakat terkait pentingnya asuransi.`,
    img: siloam,
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },
    {
    message: "2025 : Membuat website AlbertWithPru.com ",
    quote: `Membuat website AlbertWithPru.com agar siapapun bisa langsung bertanya kepada saya tanpa harus mencari2 lagi`,
    img: web,
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">
          Perjalanan Saya bersama Prudential
        </p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <img
                src={testimonial.img}
                className="justify-self-center max-h-128 object-cover rounded-xl"
                alt={`Testimonial ${index}`}
              />
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
