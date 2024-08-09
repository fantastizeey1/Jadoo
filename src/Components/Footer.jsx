import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-[120px] flex justify-center items-center flex-col  relative overflow-x-clip my-[100px]">
      <div className=" flex justify-between w-full items-start gap-8 mb-20">
        <div className="flex justify-start  items-start flex-col w-[230px]">
          <h3 className="text-[45px] text-[#181E4B]">Jadoo.</h3>
          <p className="text-[13px] text-[#5E6282]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="flex justify-between w-[500px] items-center  ">
          <div>
            <ul>
              <li className="font-bold text-[21px] mb-[25px]">Company</li>
              <li className="text-[#5E6282] text-[18px]">About</li>
              <li className="text-[#5E6282] text-[18px]">Careers</li>
              <li className="text-[#5E6282] text-[18px]">Mobile</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold text-[21px] mb-[25px]">Contact</li>
              <li className="text-[#5E6282] text-[18px]">Help/FAQ</li>
              <li className="text-[#5E6282] text-[18px]">Press</li>
              <li className="text-[#5E6282] text-[18px]">Affilates</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold text-[21px] mb-[25px]">More</li>
              <li className="text-[#5E6282] text-[18px]">Airlinefees</li>
              <li className="text-[#5E6282] text-[18px]">Airline</li>
              <li className="text-[#5E6282] text-[18px]">Low fare tips</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-start  items-start flex-col">
          <img src="/Social.png" alt="" className="w-[215px]" />
          <img src="/Discover.png" alt="" className="w-[215px]" />
        </div>
      </div>
      <p className="text-[#5E6282] text-[12px]">All rights reserved@jadoo.co</p>
    </footer>
  );
};

export default Footer;
