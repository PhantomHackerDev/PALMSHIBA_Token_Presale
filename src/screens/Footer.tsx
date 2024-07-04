import Grid from "../components/Grid";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleTerm = () => {
    navigate("/termsAndConditions");
  };
  return (
    <Grid
      className="mt-[100px] lg:px-20 z-10"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="relative m-auto">
        <div
          id="outlined-text"
          className="text-center font-axiforma font-semibold absolute right-0 text-[72px]  text-shadow shadow-[#1EE0E1]"
        >
          Get in Touch
        </div>
        <div className="text-center font-axiforma  relative bottom-[3px] right-[3px] font-semibold text-[72px] text-white">
          Get in Touch
        </div>
      </div>
      <div className="gird md:flex mx-auto mt-[30px]">
        <div className="md:my-0 my-[20px] flex flex-row ">
          <a
            target="_blank"
            href="https://facebook.com"
            className="block text-center mx-[20px] w-[125.89px] text-white text-[72px] font-bold bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07]"
          >
            f
          </a>
          <a
            target="_blank"
            href="https://instagram.com"
            className="block text-center mx-[20px] w-[125.89px] text-white text-[72px] font-bold bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07]"
          >
            in
          </a>
        </div>
        <div className="flex md:mt-0 mt-[20px]">
          <a
            target="_blank"
            href="https://twitter.com/palmshiba "
            className="text-center w-[125.89px] cursor-pointer  mx-[20px] bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07] flex flex-row items-center justify-center"
          >
            <img src="images/twitter.png" className="w-[50%]" />
          </a>
          <a
            target="_blank"
            href="https://t.me/palmshiba"
            className="text-center w-[125.89px] mx-[20px] bg-gradient-to-r h-[125.89px] rounded-full from-[#F56717] to-[#862D07] flex flex-row items-center justify-center hover:cursor-pointer"
          >
            <img src="images/telegram.png" className="w-[50%]" />
          </a>
        </div>
      </div>
      <div className="relative pt-[100px] px-3 mt-[300px] lg:mt-[100px] md:flex text-center grid justify-center md:justify-between mb-[80px] w-full border-t-2 border-t-white border-opacity-20">
        <p className="text-white text-[20px] font-helvetica">
          Copyright © 2024 PALMSHIBA. All Rights Reserved
        </p>
        <a
          onClick={() => handleTerm()}
          className="text-white w-fit md:mx-0 mx-auto cursor-pointer md:mt-0 text-center mt-3 text-[20px] font-helvetica border-b border-b-white border-opacity-80"
        >
          Terms and Conditions
        </a>
        <img
          src="images/shiba.png"
          className="absolute right-0 -top-[227px] w-[227px]"
        />
      </div>
    </Grid>
  );
};

export default Footer;
