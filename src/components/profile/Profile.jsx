import person from "../../assets/images/albert.jpg";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

const Profile = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
        id="profile"
         initial={{opacity: 0, y: -10}}
          whileInView={{ opacity: [0,1], y: [-30,0] }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
      >
        <div
          className="flex max-md:flex-col justify-between items-center gap-6"
         
        >
          {/* Profile image */}
          <m.div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126"
          initial={{opacity: 0, y: -10}}
          whileInView={{ opacity: [0,1], y: [-30,0] }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          >
            <div className="max-w-120 object-fill overflow-hidden rounded-xl sm:min-h-64 md:min-h-80 lg:min-h-96 shadow-2xl shadow-white">
              <img
                className="bg-soft-white h-[120%] object-cover"
                src={person}
                alt=""
              />
            </div>
            {/* Social media section */}
            <div className="relative bottom-9">
              <div className="flex justify-center">
                <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </m.div>

          <m.div className="max-sm:w-full w-[33rem]"
          initial={{opacity: 0, y: -10}}
          whileInView={{ opacity: [0,1], y: [-30,0] }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
            <h2
              className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
            >
              Tentang Albert
              <p className="text-sm">@albertwithpru</p>
            </h2>
            <div
              className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
            >
              <p className="mb-3">
                <b className={"text-xl"}>
                  Jadi nasabah asuransi selama 2 Tahun
                </b>
                , dan akhirnya menjadi{" "}
                <b className={"text-xl"}>
                  Korban iming-iming agen dan ditinggal agen
                </b>
                .
              </p>
              <p className={``}>
                Tidak lupa saat Saya menjadi saksi hidup saat Alm. kakak dari
                sakit sampai berpulang, Prudential menepati janji kontrak yang
                dibuat diantara kakak dan Prudential untuk biaya berobat di
                rumah sakit hingga beliau tutup usia.
              </p>
              <p className="mt-3">
                Dari saat itulah Saya ingin menjadi agen yang setia dan bisa
                membantu orang-orang merencanakan keuangan dan melindungi masa
                depan keluarga yang membutuhkan.
              </p>
              <b className="mt-3 block">
                "Selalu Berikan Yang Terbaik untuk Keluarga Mu."
              </b>
            </div>
            {/* <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#!"
            >
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="#!"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div> */}
          </m.div>
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default Profile;
