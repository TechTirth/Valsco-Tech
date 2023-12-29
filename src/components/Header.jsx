import React, { useEffect, useState, useRef } from "react";
import AboutUs from "./AboutUs";

const ChangingText = () => {
  const [isAmber, setIsAmber] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAmber((prevIsAmber) => !prevIsAmber);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const textColorStyle = {
    color: isAmber ? "#FFC107" : "#FFFFFF",
    transition: "color 0.3s ease",
  };

  return (
    <div className="text-2xl font-black my-auto" style={textColorStyle}>
      ValsCo Technology
    </div>
  );
};

const Header = ({ scrollToAboutUs, scrollToContact, scrollToDonateUs, scrollToEvent }) => {
  return (
    <div className="flex w-[1190px] max-w-full items-center justify-between gap-5 max-md:flex-wrap">
      <ChangingText />
      <div className="self-stretch flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="flex basis-[0%] flex-col items-stretch mt-5 self-start">
          <div className="text-white text-xs self-center my-auto relative group">
            <button>Home</button>
            <span className="absolute inset-x-0 top-[18px] h-1 bg-yellow-500 transform scale-x-0"></span>
          </div>
        </div>
        <div
          className="text-white text-xs self-center my-auto relative group"
          onClick={scrollToAboutUs}
        >
          <button>About Us</button>
          <span className="absolute inset-x-0 top-[18px] h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </div>
        <div onClick={scrollToEvent} className="text-white text-xs self-center my-auto relative group">
          <button>Events</button>
          <span className="absolute inset-x-0 top-[18px] h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </div>
        <div onClick={scrollToDonateUs} className="text-white text-xs my-auto relative group">
          <button>Are You a Volunteer?</button>
          <span className="absolute inset-x-0 top-[18px] h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </div>
        <div onClick={scrollToContact} className="text-white text-xs self-center my-auto relative group">
          <button>Contact</button>
          <span className="absolute inset-x-0 top-[18px] h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </div>
        <button className="text-teal-700 text-xs whitespace-nowrap bg-amber-200 self-stretch grow justify-center items-stretch px-7 py-5 max-md:px-5 hover:bg-orange-300">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
