import React from "react";

const Subscribe = () => {
  return (
    <section className="w-full px-[120px] flex justify-center items-center flex-col relative overflow-x-clip my-[100px]">
      <div className="bg-[#DFD7F9] w-full p-10 rounded-r-lg rounded-s-lg rounded-ss-[129px] h-[407px] flex justify-center items-center flex-col">
        <p className="font-semibold text-[33px] text-center text-[#5E6282]  mb-9  px-10">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
        <div className="relative">
          <img
            src="/Group 46.png"
            alt=""
            className="absolute top-[37%] w-4 left-3"
          />
          <input
            type="email"
            name=""
            placeholder="Your email"
            id=""
            className="p-4 w-64 rounded-sm placeholder:pl-6"
          />
          <button className="bg-[#FF946D] p-4 px-7 rounded-md ml-5 text-white">
            Subscribe
          </button>
        </div>
      </div>
      <img src="/Group 5.png" alt="" className="absolute right-8 -bottom-20" />
      <img src="/Group 77.png" alt="" className="absolute right-24 -top-9" />
    </section>
  );
};

export default Subscribe;
