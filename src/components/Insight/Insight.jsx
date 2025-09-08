import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Insight = () => {
  return (
    <div className="py-30 max-w-192 h-auto mx-auto px-2">
      <div className="text-center gap-6 flex flex-row flex-wrap justify-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-12">
          Masih Bingung tentang Asuransi ?
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          Coba cek Pilihan dibawah ini, setelah dipilih akan muncul video penjelasan 1 menit untuk awam 
        </p>
        <a
          href="#!"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Apa aja sih isi Asuransi Pribadi ? 
          {/* jelasin video segitiga kesehatan */}
          {/* <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          /> */}
        </a>

        <a
          href="#!"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
         Tips biar gak salah milih asuransi

        </a>

        <a
          href="#!"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Kelebihan Punya Asuransi Kesehatan
        </a>
      </div>
    </div>
  );
};

export default Insight;
