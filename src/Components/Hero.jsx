import React from "react";

const Hero = () => {
  return (
    <section className="w-full px-[120px] flex justify-between items-center relative overflow-x-clip">
      <div className="w-[40%] ">
        <p className="text-[#DF6951] text-[20px] font-bold">
          Best Destinations around the world
        </p>
        <h1 className="font-bold text-[64px] leading-[69px] mb-[30px] mt-[24px] relative">
          Travel, enjoy and live a new and full life
          <img
            src="/Decore.png"
            alt="plane"
            className="absolute top-[28%] left-[40%] w-[290px] -z-10"
          />
        </h1>
        <p className="text-[#5E6282] leading-8 text-[16px] mb-[34px] pr-[60px]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.....
        </p>
        <div className="flex justify-start items-center">
          <button className="bg-[#F1A501] py-[9px] px-[18px] text-white rounded-md mr-[44px]">
            Find out more
          </button>
          <div className="flex justify-center w-[156px] items-center">
            <div className="h-[52px] w-[52px] rounded-full bg-[#DF6951] flex items-center justify-center mr-3">
              <img src="/Polygon.png" alt="" className=" w-[15px] h-[15px]" />
            </div>
            <p>Play Demo</p>
          </div>
        </div>
      </div>
      <div className="w-[60%] relative ">
        <img src="/Traveller.png" alt="heroimg" />
        <img
          src="/plane.png"
          alt="plane"
          className="absolute top-[5%] left-[18%]"
        />
        <img
          src="/plane.png"
          alt="plane"
          className="absolute top-[12%] -right-[5%] -z-10"
        />
      </div>
      <img
        src="/Decore.svg"
        alt="bg"
        className="absolute -top-[28%] -right-4 -z-20"
      />
    </section>
  );
};

export default Hero;
