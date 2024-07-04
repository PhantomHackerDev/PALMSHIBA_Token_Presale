const ShibaBlock_top = () => {
  return (
    <div className="absolute -top-[100px] left-[55%] w-[600px] h-[500px] lg:hidden block">
      <div className="left-[-50%] w-[500px] h-[500px] rounded-full absolute">
        {/* <img
            src="images/leaves.png"
            className="absolute bottom-25 left-4"
            alt="leaves image"
          /> */}
        <img
          src="images/shiba_palm.png"
          className="absolute"
          alt="shiba image"
        />
      </div>
      {/* <img
          src="images/shiba_footprintf_filled.png"
          className="absolute rotate-[-8.3deg] w-[122.54px] opacity-[25%] h-[122.54px] top-[0px] left-0"
        /> */}
    </div>
  );
};

export default ShibaBlock_top;
