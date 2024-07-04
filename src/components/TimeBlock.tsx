import TimeAtomicBlock from "./TimeAtomicBlock";

const TimeAtomicBlockSepeateComp = () => {
  return (
    <div className="m-auto w-[5.42px] h-[18.97px] flex justify-between flex-col">
      <div className="bg-white w-[5.42px] h-[5.42px] rounded-full"></div>
      <div className="bg-white w-[5.42px] h-[5.42px] rounded-full"></div>
    </div>
  );
};

const TimeBlock = () => {
  return (
    <>
      <div className="flex justify-center">
        <TimeAtomicBlock title="days" value={5} />
        <TimeAtomicBlockSepeateComp />
        <TimeAtomicBlock title="hours" value={20} />
        <TimeAtomicBlockSepeateComp />
        <TimeAtomicBlock title="minutes" value={12} />
        <TimeAtomicBlockSepeateComp />
        <TimeAtomicBlock title="days" value={39} />
      </div>
      <div className="pt-7">
        <div className="flex justify-between">
          <p className="font-shareTech text-white text-[32px]">RAISED:</p>
          <p className="font-shareTech text-[#F7A039] text-[24px]">
            $ 1,435,379.01/$2,000,000
          </p>
        </div>
        <div className="flex justify-between">
          <div className="w-[125px] border my-auto border-white"></div>
          <p className="h-[23px] text-[#F7A039] font-shareTech text-[20px] text-center">
            1 BCF = $0.000375
          </p>
          <div className="w-[125px] border my-auto border-white"></div>
        </div>
        <div className="flex justify-between font-shareTech text-white text-[20px]">
          <p>Amount you pay</p>
          <p>PALMSHIBA you receive</p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between w-[182px] h-[53px] rounded-[8px] bg-[#0D0B33]">
            <div className="m-auto">
              <input
                type="text"
                className="text-[#F7A039] pl-3 font-poppins outline-none w-[115px] bg-transparent text-[20px]"
                defaultValue="5"
              />
            </div>
            <div className="flex justify-between m-auto">
              <div className="m-auto h-[34px] w-0 border border-gray-700"></div>
              <div className="m-auto">
                <img src="images/bsc_icon.png" className="w-[50px]" />
              </div>
            </div>
          </div>
          <div className="flex justify-between w-[182px] h-[53px] rounded-[8px] bg-[#0D0B33]">
            <input
              type="text"
              defaultValue={"234.00"}
              readOnly={true}
              className="text-[#F7A039] bg-transparent outline-none w-[115px]  pl-3 font-poppins text-[20px]"
            />

            <div className="m-auto">
              <img src="images/palmshiba_icon.png" className="w-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeBlock;
