const KlaimTemplate = ({ klaim }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center mx-auto">
        <p className="text-xs sm:text-[14px] md:text-[18px] pb-5 sm:pb-10 md:pb-14 max-w-144.25 text-dark font-bold">
          {klaim?.message}
        </p>
      </div>
    </div>
  );
};

export default KlaimTemplate;
