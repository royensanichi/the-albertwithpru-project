import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "2021 - 2023 : Masa-masa Covid",
    quote: `Sadar Pentingnya Asuransi saat pandemi, masuk dengan agen asuransi sekaligus teman baik, 3 bulan polis terbit terkena COVID, berobat sampai sembuh dan di re-imburse, sayangnya 2 tahun kemudian saya ditinggal agen. Polis Lapsed.`,
    // name: "Esther Howard",
    // designation: "Managing Director, ABC Company",
  },
  {
    message:
      "Sebuah pikiran",
    quote: `Pikirnya saya masih muda, saya masih sehat. udah gak ada COVID lagi, buat apa sih asuransi ? `,
    // name: "Ali Haider",
    // designation: "COO, XYZ Company",
  },
  {
    message:
      "2024 : Anggota keluarga terkena sakit berat",
    quote: `Kakak terkena sakit berat, Kanker. Puji Tuhan kakak sadar pentingnya asuransi. biaya pengobatan total full cover 300 Juta. pada akhirnya beliau berpulang, dan meninggalkan keluarga sejumlah uang melalui Asuransi.`,
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },
    {
    message:
      "2024 - sekarang : menjadi Servicing Agent Prudential",
    quote: `diajak bergabung oleh teman yang juga seorang agen Prudential. Mulai belajar dan memahami pentingnya asuransi untuk melindungi diri dan keluarga.`,
    // name: "Elon Max",
    // designation: "Managing Director, KFC Company",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Perjalanan Saya</p>
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
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
