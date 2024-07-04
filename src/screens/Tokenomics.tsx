const Tokenomics = () => {
  return (
    <section
      id="roadmap"
      className="mt-[100px] px-7 sm:px-[33px] z-10 "
      data-aos="flip-left"
    >
      <h1 className="text-[#F04C25] mb-[80px] font-holtwood text-center text-[25px] sm:text-[40px]">
        TOKENOMICS
      </h1>
      <div className=" py-[50px] border-[3px] border-[#F04C25] border-dashed rounded-2xl">
        <div className="flex flex-wrap justify-center ">
          <div className="w-full md:w-1/3 lg:w-1/5 my-5">
            <div className="w-[153px] font-impact h-[153px] m-auto flex  rounded-full border border-[#F04C25] bg-[#141746] text-white text-center text-[50px]">
              <p className="m-auto">30%</p>
            </div>
            <p className="text-white mt-10 font-helvetica m-auto text-[28px] sm:text-[32px] text-center">
              Presale
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/5 my-5">
            <div className="w-[153px] font-impact h-[153px] m-auto flex  rounded-full border border-[#F04C25] bg-[#141746] text-white text-center text-[50px]">
              <p className="m-auto">20%</p>
            </div>
            <p className="text-white mt-10 font-helvetica m-auto text-[28px] sm:text-[32px] text-center">
              Staking
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/5 my-5">
            <div className="w-[153px] font-impact h-[153px] m-auto flex  rounded-full border border-[#F04C25] bg-[#141746] text-white text-center text-[50px]">
              <p className="m-auto">20%</p>
            </div>
            <p className="text-white mt-10 font-helvetica m-auto text-[28px] sm:text-[32px] text-center">
              Community Rewards
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/5 my-5">
            <div className="w-[153px] font-impact h-[153px] m-auto flex  rounded-full border border-[#F04C25] bg-[#141746] text-white text-center text-[50px]">
              <p className="m-auto">10%</p>
            </div>
            <p className="text-white mt-10 font-helvetica m-auto text-[28px] sm:text-[32px] text-center">
              DEX/CEX Liquidity
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/5 my-5">
            <div className="w-[153px] font-impact h-[153px] m-auto flex  rounded-full border border-[#F04C25] bg-[#141746] text-white text-center text-[50px]">
              <p className="m-auto">20%</p>
            </div>
            <p className="text-white mt-10 font-helvetica m-auto text-[28px] sm:text-[32px] text-center">
              Marketing
            </p>
          </div>
          <div className="mt-7 sm:flex text-center grid font-helvetica text-[32px]">
            <span className="text-[#F04C25]">Token Supply</span>
            <span className="hidden sm:block text-[#F04C25]">:&nbsp;</span>
            <span className="text-white">69.000.000.000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
