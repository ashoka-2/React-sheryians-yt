import React from "react";
import left from "../../assets/Images/left.jpg";
import middle from "../../assets/Images/middle.jpg";
import right from "../../assets/Images/right.jpg";
import arrow from "../../assets/Images/arrow.png"
import logo from "../../assets/Images/logo.png"
import star from "../../assets/Images/star.png"
import line from "../../assets/Images/line.png"
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";








const ServiceCard = ({text1,text2,para,image})=>{
  return (
    <div data-aos="fade-left" className="overflow-hidden border-2 border-purple-300 p-4 rounded-xl w-80 h-90 md:h-100 md:w-90 flex flex-col  justify-between whitespace-normal shrink-0">
          <div className="pb-2 flex justify-between items-center">
            <h5 className="text-xl md:text-2xl font-sans font-semibold">
              {text1}
              <br />
              {text2}
            </h5>
            <div data-aos="fade-left" data-aos-delay="100" className="py-2 px-3 text-white text-xl rounded-full bg-purple-600 hover:bg-white hover:text-purple-600 border-2 border-violet-600 cursor-pointer transition-all ease-linear">
              <i className="ri-arrow-right-up-long-line"></i>
            </div>
          </div>

          <hr className="text-purple-400" />

          <div className="py-2">
            <span className="text-[.9rem] text-gray-500 md:text-sm">
              {para}
            </span>
          </div>
          <div>
            <img src={image} className="rounded-2xl h-40 w-full object-cover" />
          </div>
        </div>
  )
}




const ServiceCard2 = ({text1,text2,para,image})=>{
  return (
    <div data-aos="fade-left" className="relative  flex justify-center items-center whitespace-normal">
      
      <svg width="0" height="0">
        <defs>
          <clipPath id="cardClip" clipPathUnits="objectBoundingBox">
            <path
              d="
             M.134.001H.869Q.999 0 .999.131V.858Q1.001 1 .865.999H.498C.223.998.002.795.003.593V.138Q0 .001.133.001Z"
            />
          </clipPath>

          {/* IMAGE CLIP */}
          <clipPath id="imageClip" clipPathUnits="objectBoundingBox">
            <path
              d="
            M.134.001H.869Q.999 0 .999.131V.858Q1.001 1 .865.999H.563C.132 1.002.001.609-.003.417-.01.354-.005.228-.003.138Q0 .001.133.001Z"
            />
          </clipPath>
        </defs>
      </svg>

    <div className="overflow-hidden relative">
       <div
        className="bg-purple-700 text-white p-5 flex flex-col justify-between
                   w-80 h-100 lg:w-90 lg:h-100"
        style={{
          clipPath: "url(#cardClip)",
        }}
      >
        <div>
          <h5 className="text-2xl font-semibold">
            {text1}<br /> {text2}
          </h5>

          <hr className="my-2 border-purple-400" />

          <p className="text-sm text-gray-300 text-center">
           {para}
          </p>
        </div>
        <div
          className="w-full h-60 mt-4"
          style={{
            clipPath: "url(#imageClip)",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>


      <div data-aos="fade-right" data-aos-delay="100"  className="absolute left-2 bottom-2 bg-white px-5 py-4 rounded-full border-4 border-violet-600 text-3xl text-violet-700 hover:bg-violet-600 hover:text-white transition-all ease-linear" ><i className="ri-arrow-right-up-long-line"></i></div>

    </div>
     
    </div>
  )
}







const Services = () => {


  const scrollRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0)
  const CARD_WIDTH = 400;
  const TOTAL_CARDS = 6;  

  





  const scrollLeft = () => {

    if(!scrollRef.current) return;

  scrollRef.current.scrollBy({
    left: -CARD_WIDTH, 
    behavior: "smooth",
  });

  setActiveIndex((prev)=> Math.max(prev -1, 0));

};

const scrollRight = () => {
    if(!scrollRef.current) return;

  scrollRef.current.scrollBy({
    left: 400,
    behavior: "smooth",
  });
  setActiveIndex((prev)=> Math.max(prev +1, TOTAL_CARDS - 1));

};


useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  const onScroll = () => {
    const index = Math.round(el.scrollLeft/ CARD_WIDTH);
    setActiveIndex(index);
  }

  el.addEventListener("scroll", onScroll);

  return () => {
    el.removeEventListener("scroll", onScroll);
  };

},[]);



  return (
    <div data-aos="fade-up"  className="my-5 md:my-10 border border-gray-300 px-4 py-2 md:py-6 rounded-2xl">
      <div data-aos="fade-up" className="py-4 px-4 flex flex-col md:flex-row md:justify-between items-center">
        <h5 className="text-2xl md:text-3xl">Our Services</h5>
        <span className="text-[12px] md:text-sm text-gray-400">
          Discover a wide range of opportunities through <br />a comprehensive
          range of qualified services
        </span>
      </div>

      <div ref={scrollRef} data-aos="fade-up" className="py-2 flex flex-col md:flex-row  gap-4 px-4 items-center overflow-x-auto flex-nowrap scroll-smooth scrollbar-hide ">
        
        <ServiceCard text1="Motion" text2=" Graphic" para="Bring you ideas to life through dynamic visuals and engaging
              animations." image={left}/>


      <ServiceCard2 text1="2D/3D" text2="Animation" para=" Turn imagination into reality with our stunning 2D/3D animations." image={middle}/>      
          <ServiceCard text1="Visual" text2="Identity" para="Shape a unique brand persona through our comprehensive Visual
              identity solutions." image={right}/>

              <ServiceCard2 text1="Motion" text2=" Graphic" para="Bring you ideas to life through dynamic visuals and engaging
              animations." image={left}/>

        <ServiceCard text1="Visual" text2="Identity" para="Shape a unique brand persona through our comprehensive Visual
              identity solutions." image={right}/>

              <ServiceCard2 text1="Motion" text2=" Graphic" para="Bring you ideas to life through dynamic visuals and engaging
              animations." image={left}/>
        
      </div>

      <div data-aos="fade-up" className="hidden md:flex justify-between items-center">
        <div className="flex gap-2">
          <div onClick={scrollLeft} className=" hover:bg-violet-500 px-2 py-1 rounded-full text-gray-400 hover:text-white cursor-pointer transition-all ease-linear">
            <i className="ri-arrow-left-long-line text-2xl"></i>
          </div>
          <div onClick={scrollRight} className="hover:bg-violet-500 px-2 py-1 rounded-full text-black  hover:text-white cursor-pointer transition-all ease-linear">
          <i className="ri-arrow-right-long-fill text-2xl"></i>

          </div>
        </div>
        <div className="flex justify-center gap-2 mt-4">
  {Array.from({ length: TOTAL_CARDS }).map((_, i) => (
    <button
      key={i}
      onClick={() => {
        scrollRef.current.scrollTo({
          left: i * CARD_WIDTH,
          behavior: "smooth",
        });
        setActiveIndex(i);
      }}
      className={`
        h-2 rounded-full transition-all duration-300
        ${activeIndex === i ? "w-6 bg-purple-600" : "w-2 bg-gray-400"}
      `}
    />
  ))}
</div>

      </div>

      <div data-aos="fade-up" className="py-6 md:py-8 relative">
        <div className="flex justify-center text-gray-400 text-[.75rem] md:text-sm mb-2">
          <div>
            <i className="ri-subtract-line"></i>
          </div>
          <span className="uppercase">About Astratto</span>
        </div>

        <div className="text-sm md:text-2xl lg:text-3xl xl:text-5xl text-center">
          <h2><span data-aos="fade-right" data-aos-delay="100"><img src={arrow} className="h-10 md:h-15 xl:h-18 inline"/></span>Our <span className="text-gray-400">visionary</span> <span className="text-red-500">artisans</span> collaborate <br /><span className="text-purple-700">seamlessly</span> to craft <span><img src={logo} className="h-6 md:h-10 xl:h-15 inline"/></span> inspiring <span className="text-gray-400">experiences,</span> <br /><span className="text-red-500">leaving</span> lasting <span className="text-gray-400">imprints</span> on <span className="text-purple-700">brands</span> <br />and spaces. <span><img src={star} style={{
        animation: "softBounce 2.4s cubic-bezier(0.4, 0, 0.2, 1)infinite",

      }}  className="h-10 md:h-15 xl:h-18 inline"/></span></h2>
        </div>

        <div data-aos="fade-up" className="absolute bottom-0 md:translate-y-10 left-50 md:left-40 xl:left-70 lg:translate-y-10 xl:translate-y-20"><img src={line} className="h-15 md:h-40 xl:h-60 rotate-10"/></div>

      </div>
    </div>
  );
};

export default Services;