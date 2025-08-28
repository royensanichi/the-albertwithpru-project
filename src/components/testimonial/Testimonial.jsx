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
const testimonialData = [
  {
    message:
      "2024 : Menjadi Agen PruVenture",
    quote: `Menjadi Agen PruVenture; Agen yang dibimbing khusus oleh Prudential untuk menjadi seorang Leader dan mampu untuk mendampingi nasabah-nasabahnya dengan baik.`,
    img:pruuniversity
    // name: "Esther Howard",
    // designation: "Managing Director, ABC Company",
  },
  {
    message:
      "2024 : Peserta PruActive FunRun",
    quote: `Mengikuti acara FunRun Prudential bersama kawan-kawan dan para nasabah.`,
    img:pruactive
    // name: "Ali Haider",
    // designation: "COO, XYZ Company",
  },
        {
    message:
      "2024 : Empurau - Health Education",
    quote: `Mengikuti Health Education dengan narasumber dokter dari Singapura untuk memperluas wawasan medis, sehingga dapat memberikan pendampingan yang lebih baik bagi nasabah.`,
    img:empurau
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },
      {
    message:
      "2024 : Next-Gen ",
    quote: `Bersama generasi anak-anak muda lainnya untuk mendapatkan edukasi merencanakan masa depan karir dan pentingnya asuransi pribadi.`,
    img:nextgen
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },
  {
    message:
      "2025 : Booth di RS.Siloam Kebun Jeruk",
    quote: `Menjalin kerja sama dengan RS Siloam guna meningkatkan pemahaman masyarakat terkait pentingnya asuransi.`,
    img:siloam
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },

];

const imgtest = "data:image/jpeg;base64,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"

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Perjalanan Saya bersama Prudential</p>
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
                <img src={testimonial.img} className="justify-self-center max-h-128 object-cover rounded-xl" alt={`Testimonial ${index}`} />
            <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
