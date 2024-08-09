import React from "react";

const Destinations = () => {
  return (
    <section className="w-full px-[120px] flex justify-center items-center flex-col relative overflow-x-clip my-[100px]">
      <p className="font-semibold text-[20px] text-[#5E6282]  mb-3">
        Top Selling
      </p>
      <h2 className="font-bold text-[50px] mb-[70px] ">Top Destinations</h2>
      <div className="flex justify-between items-center my-[60px] w-full relative flex-row-reverse">
        <div className="w-[314px] h-[457px] relative shadow-md rounded-3xl">
          <img
            src="/Rectangle 14.png"
            alt=""
            className="w-[314px] h-[457px] absolute -z-10"
          />
          <div className="bg-white absolute w-full bottom-0 h-[130px] p-6 left-0">
            <div className="flex justify-between items-center mb-5">
              <p className="font-medium text-[18px] text-[#5E6282] ">
                Full Europe
              </p>
              <p className="font-medium text-[18px] text-[#5E6282] ">$15K</p>
            </div>

            <div className="flex  items-center">
              <img src="/Navigation.png" alt="" className="mr-2" />
              <p className="font-medium text-[18px] text-[#5E6282] ">
                28 Days Trip
              </p>
            </div>
          </div>
        </div>
        <div className="w-[314px] h-[457px] relative shadow-md rounded-3xl">
          <img
            src="/Rectangle2.jpg"
            alt=""
            className="w-[314px] h-[457px] absolute -z-10"
          />
          <div className="bg-white absolute w-full bottom-0 h-[130px] p-6 left-0">
            <div className="flex justify-between items-center mb-5">
              <p className="font-medium text-[18px] text-[#5E6282] ">
                London, UK
              </p>
              <p className="font-medium text-[18px] text-[#5E6282] ">$4.2K</p>
            </div>

            <div className="flex  items-center">
              <img src="/Navigation.png" alt="" className="mr-2" />
              <p className="font-medium text-[18px] text-[#5E6282] ">
                12 Days Trip
              </p>
            </div>
          </div>
        </div>
        <div className="w-[314px] h-[457px] relative shadow-md rounded-3xl">
          <img
            src="/Rectangle 143.png"
            alt=""
            className="w-[314px] h-[457px] absolute -z-10"
          />
          <div className="bg-white absolute w-full bottom-0 h-[130px] p-6 left-0">
            <div className="flex justify-between items-center mb-5">
              <p className="font-medium text-[18px] text-[#5E6282] ">
                Rome, Italty
              </p>
              <p className="font-medium text-[18px] text-[#5E6282] ">$5,42k</p>
            </div>

            <div className="flex  items-center">
              <img src="/Navigation.png" alt="" className="mr-2" />
              <p className="font-medium text-[18px] text-[#5E6282] ">
                10 Days Trip
              </p>
            </div>
          </div>
        </div>
        <img
          src="/Decore2.png"
          alt=""
          className="absolute -right-12 top-40 -z-20"
        />
      </div>
    </section>
  );
};

export default Destinations;
