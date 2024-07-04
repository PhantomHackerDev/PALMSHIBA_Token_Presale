const Logo = () => {
  return (
    <div>
    <a
      className="w-[173px] h-[33px] text-[28px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF61C] to-[#EA0070] font-helvetica hidden md:block"
      href="/"
    >
      PALMSHIBA.
    </a>
    <div className = "md:hidden w-[70px] px-[10px]">
      <img className = "w-full" src = "/images/logo.png"/>
    </div>
    </div>
  );
};

export default Logo;
