const Claim = () => {
  return (
    <section
      id="claim"
      className="mt-[200px] px-20 relative z-10"
      data-aos="fade-up"
    >
      <h2 className="text-center break-words  mb-[100px] font-holtwood text-[40px] text-white">
        CLAIM YOUR{" "}
        <span className="text-[#F7A039]">
          PALMSHIBA <br />
        </span>{" "}
        TOKEN
      </h2>
      <div className="flex justify-center">
        <button className="rounded-[45px] font-helvetica text-white text-[32px] w-[600px] p-5 border-[9px] border-[#1B0C3D] bg-[#141746]">
          See Your Claimable Tokens
        </button>
      </div>
      <p className="text-center font-helvetica text-[32px] text-white text-opacity-40">
        Tokens can be claimed at the end of the presale
      </p>
      <img
        src="images/palm_tree_1.png"
        className="absolute w-[208px] opacity-30 h-[237px] -top-30 left-10"
      />
      <img
        src="images/shiba_footprint.png"
        className="absolute w-[140px] h-[97px] top-36 right-[7%]"
      />
    </section>
  );
};

export default Claim;
