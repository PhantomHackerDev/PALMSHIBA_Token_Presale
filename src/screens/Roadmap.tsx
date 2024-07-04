const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="mt-[200px] px-7 sm:px-[33px] z-10 "
      data-aos="flip-left"
    >
      <div className="sm:flex mx-auto grid sm:text-[37px] md:text-[48px] text-center justify-center text-[35px] font-holtwood">
        <p className="text-[#F7A039] ">PALMSHIBA</p>
        <p className="sm:block hidden">&nbsp;</p>
        <p className="text-white">ROADMAP</p>
      </div>
      <div className="mt-[40px] lg:flex grid text-center sm:text-[25px] md:text-[28px] justify-center text-[23px] font-holtwood">
        <span className="text-[#F04C25]">PHASE 1</span>
        <span className="text-[#F04C25] lg:block hidden">:&nbsp;</span>
        <span className="text-white">
          PRESALE AND TOKEN DISTRIBUTION <br />
          presale
        </span>
      </div>
      <div className="mt-[72px] flex flex-wrap bg-[#0D0D2D] rounded-2xl px-[30px] py-[20px] justify-center font-helvetica text-[26px] text-white">
        <div className="flex w-full my-[40px] md:w-1/2 lg:w-1/3">
          <div className="mt-2 mr-3 border-[1.14px] flex min-w-[24px] h-[24px] border-[#F04C25] rounded-full bg-transparent">
            <div className="bg-[#F04C25] min-w-[15.11px] h-[15.11px] rounded-full m-auto"></div>
          </div>
          <span className="">Industry research and consultation</span>
        </div>
        <div className="flex w-full my-[40px] md:w-1/2 lg:w-1/3">
          <div className="mt-2 mr-3 border-[1.14px] flex min-w-[24px] h-[24px] border-[#F04C25] rounded-full bg-transparent">
            <div className="bg-[#F04C25] min-w-[15.11px] h-[15.11px] rounded-full m-auto"></div>
          </div>
          <span className="">
            Token, presale and staking contract development
          </span>
        </div>
        <div className="flex w-full my-[40px] md:w-1/2 lg:w-1/3">
          <div className="mt-2 mr-3 border-[1.14px] flex min-w-[24px] h-[24px] border-[#F04C25] rounded-full bg-transparent">
            <div className="bg-[#F04C25] min-w-[15.11px] h-[15.11px] rounded-full m-auto"></div>
          </div>
          <span className="">
            PSHIBA campaign - presale launch, claim and exchange listings
          </span>
        </div>
        <div className="flex w-full my-[40px] md:w-1/2 lg:w-1/3">
          <div className="mt-2 mr-3 border-[1.14px] flex min-w-[24px] h-[24px] border-[#F04C25] rounded-full bg-transparent">
            <div className="bg-[#F04C25] min-w-[15.11px] h-[15.11px] rounded-full m-auto"></div>
          </div>
          <span className="">
            Extensive multimedia marketing campaign launch
          </span>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
