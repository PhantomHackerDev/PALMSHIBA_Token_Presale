const AboutUs = () => {
  return (
    <section
      id="about"
      className="mt-[100px] px-5 md:px-20 relative z-10"
      data-aos="fade-up"
    >
      <h2 className="text-center mb-[100px] font-holtwood text-[40px] text-[#F04C25]">
        ABOUT US
      </h2>
      <div className="grid md:flex justify-between w-full">
        <div className="mx-auto w-[250px] h-[250px] sm:w-[370px] sm:h-[370px] relative">
          <img
            src="images/leaves.png"
            className="absolute bottom-[10%] left-[5%] sm:bottom-[30%] sm:left-[5%]"
            alt="leaves image"
          />
          <img src="images/shiba.png " className="absolute" alt="shiba image" />
        </div>
        <div className="md:w-[50%] min-w-[375px]">
          <h3 className="font-holtwood relative mb-[30px] text-white text-[30px] sm:text-[40px] text-left">
            MEET PALMSHIBA
            <img
              src="images/palm_tree_2.png"
              className="absolute w-[112px] h-[130px] -top-15 right-0"
            />
          </h3>
          <div className="text-white text-justify w-[90%] sm:w-auto font-helvetica text-[20px] sm:text-[24px]">
            Palmshiba is more than a mascot; it's the heart of Palmshiba. A
            symbol of playfulness and loyalty, Palmshiba is a community-driven
            crypto adventure. Dive into a world where memes meet finance, and
            join us as we redefine the crypto experience with Palmshiba charm.
            Prepare for a tail-spinning adventure as you dive into the world of
            Palmshiba. Our fluffy mascot, Palmshiba, is not just a dog; he's the
            alpha of the crypto kennel!
          </div>
        </div>
      </div>
      <img
        src="images/shiba_footprint.png"
        className="absolute w-[140px] h-[97px] -top-20 sm:-top-10 left-[100px]"
      />
    </section>
  );
};

export default AboutUs;
