const Gallery = () => {
  return (
    <section
      className="mt-[200px] px-20 z-10"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h2 className="text-center mb-[80px] font-holtwood text-[40px] text-[#E1931E]">
        GALLERY
      </h2>
      <div className="">
        <div className="grid sm:flex sm:h-[220px] md:h-[300px] lg:h-[416px] mb-[30px]">
          <img
            src="images/gal_1.png"
            alt="gal_1"
            className="sm:w-1/3 w-full sm:object-fill object-cover sm:h-auto h-[200px] rounded-2xl mr-[30px]"
          />
          <img
            src="images/gal_2.jpg"
            alt="gal_1"
            className="sm:w-2/3 w-full sm:mt-0 mt-7 sm:h-auto h-[200px] object-cover rounded-2xl"
          />
        </div>
        <div className="grid sm:flex sm:h-[220px]  md:h-[300px] lg:h-[416px]">
          <img
            src="images/gal_3_u.png"
            alt="gal_3"
            className="sm:w-2/3 w-full sm:h-auto h-[200px] rounded-2xl mr-[30px] object-cover"
          />
          <img
            src="images/gal_4.jpg"
            alt="gal_4"
            className="sm:w-1/3 w-full sm:mt-0 mt-7  sm:object-fill object-cover  rounded-2xl sm:h-auto h-[200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
