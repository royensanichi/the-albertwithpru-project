import person from "../../assets/images/albert.jpg";
import group from "../../assets/images/group_photo.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

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
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <img  src={group}
          alt="group" 
             className="absolute inset-0 w-full max-h-350 object-cover opacity-60 -z-0"
      />
      <div className="w-full flex flex-col justify-between max-lg:text-center z-10 ">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500 text-white drop-shadow-[0_0_8px_black]">
          <p className="text-sm sm:text-base w-full
          lg:w-auto text-center lg:text-start mb-3">
            <span className="font-semibold text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl text-nowrap shrink-0 inline-block w-full">
              Albert Sany
            </span>
             @albertwithpru | Servicing Agent Prudential
          </p>
          <p className="text-xs xxs:text-lg lg:text-xl my-6 bg-white rounded-xl text-black font-semibold p-4 opacity-90">
           "Siap membantu Anda merencanakan keuangan dan melindungi masa depan keluarga Anda."
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:example@gmail.com"
            >
              Konsultasi Gratis!
            </a>
          </p>
        </div>

        {/* Informasi Ringkas */}
        {/* <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div> */}
      </div>
      <div
        className={`max-w-128 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-contain bg-white rounded-3xl`}
          src={group}
          alt="group"
        />
      </div>
    </div>
  );
};

export default Introduction;
