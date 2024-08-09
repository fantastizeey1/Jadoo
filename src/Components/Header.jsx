import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[40px] px-[120px] flex justify-between items-center mt-[47px] mb-[21px]">
      <div>
        <img src="/Logo.svg" alt="logo" />
      </div>
      <div className="justify-around flex items-center ">
        <a href="#" className="ml-[62px]">
          Desitnations
        </a>
        <a href="#" className="ml-[62px]">
          Hotels
        </a>
        <a href="#" className="ml-[62px]">
          Flights
        </a>
        <a href="#" className="ml-[62px]">
          Bookings
        </a>
      </div>
      <div className="flex ">
        <button className="">Login</button>
        <button className="border border-[#212832] rounded-md ml-[50px] mr-[45px] py-[9px] px-[22px]">
          Sign up
        </button>
        <div className="flex justify-center font-thin bg-transparent">
          <select id="dropdown" className="bg-transparent">
            <option value="EN">EN</option>
            <option value="FR">FR</option>
            <option value="GB">GB</option>
            <option value="ES">ES</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
