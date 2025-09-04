import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import KlaimTemplate from "./KlaimTemplate";
import "./testimonial.css";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

import klaim1 from "../../assets/images/klaim/klaim1.webp";
import klaim2 from "../../assets/images/klaim/klaim2.webp";
import klaim3 from "../../assets/images/klaim/klaim3.webp";
import klaim4 from "../../assets/images/klaim/klaim4.webp";
import klaim5 from "../../assets/images/klaim/klaim5.webp";

const klaimData = [
  {
    message: `Pria 41 Thn, Sakit DBD
    Rawat Inap - FULL COVER 26 Juta rupiah ✅`,
    img: klaim1,
  },
  {
    message:
      "49 Thn, Operasi Katarak di Jakarta Eye Center - FULL COVER 37.5 Juta rupiah ✅",
    img: klaim2,
  },
  {
    message:
      "24 Thn, Sakit DBD, Rawat Inap 7 Hari - FULL COVER 18 Juta rupiah ✅",
    img: klaim3,
  },
  {
    message:
      "Buat Asuransi Jiwa Tahun 2017 dan Tahun 2019. Jumlah Manfaat terhitung 1.1 Milyar untuk Keluarga Tercinta, dan Beliau Tutup Usia Tahun 2025. diwariskan ke keluarga Sejumlah Rp. 1.123.651.170 ✅ ",
    img: klaim4,
  },
  {
    message: "ODC Mata di Singapur - FULL COVER 194 Juta rupiah ✅",
    img: klaim5,
  },
];

const Klaim = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
        <m.div
          className="w-full h-full cursor-grab"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [0, 1], y: [-30, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <p className="section-title mb-6 text-center bg-red-700 rounded-xl text-white">
            Bukti Klaim Prudential
          </p>
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
                <div className="flex flex-col lg:flex-row items-center justify-center h-full px-4 lg:px-0">
                  <KlaimTemplate klaim={klaim} />
                  <img
                    src={klaim.img}
                    onClick={() => {window.innerWidth > 1024 ? openModal(klaim.img) : null}} 
                    className="justify-self-center max-w-80 object-fit rounded-xl shadow-xl mb-2 cursor-pointer"
                    alt={`Klaim ${index}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </m.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <m.div
          className="fixed inset-0 bg-gray-800 bg-opacity-30 flex justify-center items-center z-50"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [-10,0] }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="relative bg-transparent p-4 rounded-lg shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-xl"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected Klaim"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </m.div>
      )}
    </LazyMotion>
  );
};

export default Klaim;
