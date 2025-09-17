import siloam from "../../assets/images/prusiloam.jpg";
import group from "../../assets/images/group_photo.jpg";
import "./introduction.css";
import { LazyMotion, domAnimation } from "motion/react";
import { Link } from "react-scroll";
import * as m from "motion/react-m";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Pengalaman",
    description: "+1 Tahun",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "100+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "58  ",
  },
];

const Introduction = () => {
  const handleMenuClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="flex max-lg:flex-col-reverse sm:justify-between lg:items-center lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
        id="introduction"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={window.innerWidth > 1024 ? group : siloam}
          alt="group"
          className="absolute inset-0 w-full max-h-350 object-cover opacity-60 -z-0 blur-xs"
        />
        <m.div className="w-full flex flex-col justify-between max-lg:text-center z-10 ">
          <div className="pt-4 me-31.5 w-full xl:w-auto transition-all duration-500 text-white">
            <p className="text-sm sm:text-base w-full lg:w-auto text-center lg:text-start mb-3 drop-shadow-[0_0_4px_black]">
              <m.span
                className="font-semibold text-3xl sm:max-xl:text-5xl xl:text-7xl text-nowrap shrink-0 inline-block w-full"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Agen Terbaik Anda
              </m.span>
              {/* <span className="font-semibold text-2xl sm:max-xl:text-5xl xl:text-6xl text-nowrap shrink-0 inline-block w-full">#AlbertWithPru</span> */}
              <m.span
                className="drop-shadow-[0_0_2px_black] block text-base sm:text-md lg:text-xl mt-3"
                //  initial={{ y: -80, opacity:0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Albert Sany | Servicing Agent Prudential
              </m.span>
            </p>
            <m.p
              className="text-xs xxs:text-lg lg:text-xl my-6 bg-white rounded-xl text-black font-semibold p-4 opacity-90"
              animate={{ y: [-30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              "Siap membantu Anda merencanakan keuangan dan melindungi masa
              depan keluarga Anda."
            </m.p>
            <m.div
              className="text-center lg:text-start"
              animate={{ y: [-30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <Link
                onClick={handleMenuClick}
                to="contact" // this must match the id="contact"
                smooth={true}
                duration={1000}
                offset={0} // adjust so it stops above footer nicely
                spy={true}
                className="btn-primary btn btn-xs xxs:btn-lg text-white cursor-pointer inline-block"
              >
                <span
                  className="w-full h-full flex items-center justify-center"
                  animate={{ y: [-30, 0], opacity: [0, 1] }}
               
                >
                  Konsultasi Gratis!
                </span>
              </Link>
            </m.div>
          </div>

          {/* Informasi Ringkas */}
          {/* <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div> */}
        </m.div>

        <m.div
          className={`max-w-128 w-full h-auto max-lg:mx-auto aspect-[536/636] relative`}
        >
          <img
            className={
              window.innerWidth > 1024
                ? `shadow-2xl shadow-gray-200 w-full h-auto absolute inset-0 m-auto object-contain bg-white rounded-3xl sm:`
                : `shadow-2xl shadow-gray-200 w-full h-auto absolute bottom-auto object-contain bg-white rounded-3xl`
            }
            src={window.innerWidth > 1024 ? group : siloam}
            alt="group"
          />
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default Introduction;
