import React from "react";

const Book = () => {
  return (
    <section className="w-full px-[120px] flex justify-center items-center  relative overflow-x-clip my-[100px]">
      <div className="w-1/2 pr-12">
        <p className="font-semibold text-[20px] text-[#5E6282]  mb-3">
          Easy and Fast
        </p>
        <h2 className="font-bold text-[50px] mb-[30px] ">
          Book your next trip in 3 easy steps
        </h2>
        <div className="flex justify-start items-center flex-col gap-12">
          <div className="flex justify-start items-start ">
            <img src="Group 7.png" alt="" className="w-[48px] mr-4" />
            <div className="flex justify-start items-start flex-col pr-[90px]">
              <h5 className="font-bold text-[16px] text-[#5E6282] leading-5 ">
                Choose Destination
              </h5>
              <p className="font-normal text-[16px] text-[#5E6282] leading-5  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start ">
            <img src="Group 12.png" alt="" className="w-[48px] mr-4" />
            <div className="flex justify-start items-start flex-col pr-[90px]">
              <h5 className="font-bold text-[16px] text-[#5E6282] leading-5 ">
                Make Payment
              </h5>
              <p className="font-normal text-[16px] text-[#5E6282] leading-5  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start ">
            <img src="Group 11.png" alt="" className="w-[48px] mr-4" />
            <div className="flex justify-start items-start flex-col pr-[90px]">
              <h5 className="font-bold text-[16px] text-[#5E6282] leading-5 ">
                Reach Airport on Selected Date
              </h5>
              <p className="font-normal text-[16px] text-[#5E6282] leading-5  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative">
        <img src="/Image.png" alt="" className="w-[585px] h-[459px]" />
        <img src="/Group 589.png" alt="" className="absolute -top-16 -z-10" />
      </div>
    </section>
  );
};

export default Book;
