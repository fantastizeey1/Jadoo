import React from "react";

const Services = () => {
  return (
    <section className="w-full px-[120px] flex justify-center items-center flex-col relative overflow-x-clip my-[100px]">
      <p className="font-semibold text-[20px] text-[#5E6282]  mb-3">CATEGORY</p>
      <h2 className="font-bold text-[50px] mb-[70px] ">
        We Offer Best Services
      </h2>
      <div className="w-full flex justify-between items-center">
        <div className="w-[190px] h-[227px] flex justify-center items-center flex-col p-1">
          <img
            src="/Group48.png"
            alt=""
            className="mb-[18px] w-[92px] h-[78px]"
          />
          <h4 className="font-semibold text-[20px] mb-3">
            Calculated Weather{" "}
          </h4>
          <p className="text-[#5E6282] leading-6 text-[16px] mb-[34px] text-center p-2">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>
        <div className="w-[302px] h-[350px] flex justify-center items-center  relative">
          <div className="w-[190px] h-[227px] flex justify-center items-center flex-col rounded-3xl bg-white p-1">
            <img
              src="/Group51.png"
              alt=""
              className="mb-[18px] w-[116px] h-[153px]"
            />
            <h4 className="font-semibold text-[20px] mb-3">Best Flights</h4>
            <p className="text-[#5E6282] leading-6 text-[16px] mb-[34px] text-center p-2">
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>
          <img
            src="/Rectangle.png"
            alt=""
            className="absolute bottom-8 left-6 w-[80px] -z-10"
          />
        </div>
        <div className="w-[190px] h-[227px] flex justify-center items-center flex-col p-1">
          <img
            src="/Group50.png"
            alt=""
            className="mb-[18px] w-[67px] h-[75px]"
          />
          <h4 className="font-semibold text-[20px] mb-3">Local Events</h4>
          <p className="text-[#5E6282] leading-6 text-[16px] mb-[34px] text-center p-2">
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </p>
        </div>
        <div className="w-[190px] h-[227px] flex justify-center items-center flex-col p-1">
          <img
            src="/Group51.png"
            alt=""
            className="mb-[18px] w-[77px] h-[66px]"
          />
          <h4 className="font-semibold text-[20px] mb-3">Customization</h4>
          <p className="text-[#5E6282] leading-6 text-[16px] mb-[34px] text-center p-2">
            We deliver outsourced aviation services for military customers
          </p>
        </div>
      </div>
      <img src="/Group 4.png" alt="" className="absolute right-20 top-0" />
    </section>
  );
};

export default Services;
