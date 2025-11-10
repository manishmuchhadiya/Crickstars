import React from "react";
import redLionsLogo from "../assets/lion.png";
import furyTigersLogo from "../assets/tiger.png";
import statuse from "../assets/statuse.svg";
import live from "../assets/live.svg";

const MatchCard = (prop) => {
  return (
    <div className="w-[568px] h-[166px] rounded-[20px] border border-gray-100 ">
      {/* Top Section */}
      <div className="w-full h-[34px] flex justify-between items-center bg-white px-6 py-3 text-gray-600 text-[14px] mb-[15px]">
        <span>Individual match</span>

        <div className="flex items-center space-x-2">
          <img src={statuse} alt="status" />
        </div>

        <span>November 11, 2023</span>
      </div>

      {/* Teams Section */}
      <div className="w-full h-[66px] flex justify-between items-center bg-white pl-[20px]  ">
        {/* Left Team */}
        <div className="flex flex-col justify-center   ">
          <div className="flex items-center ">
            <img
              src={redLionsLogo}
              alt="Red Lions"
              className="w-[45px] h-[45px]"
            />
            <h3 className="ml-[15px] py-[16px] font-bold text-lg text-gray-900">
              Red Lions
            </h3>
          </div>
          <p className="text-lg text-blue-600 font-semibold">
            207-6{" "}
            <span className="text-lg text-gray-500 font-normal ">
              (23.2 Over)
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="h-10 w-[1px] bg-gray-200" />

        {/* Right Team */}
        <div className="flex flex-col justify-center mr-[20px] ">
          <div className="flex items-center ">
            <h3 className="mr-[15px] py-[16px] font-bold text-lg text-gray-900">
              Fury Tigers
            </h3>
            <img
              src={furyTigersLogo}
              alt="Fury Tigers"
              className="w-[45px] h-[45px]"
            />
          </div>
          <span className="text-lg text-gray-500 font-normal flex flex-row-reverse ">
            Yet to bat...
          </span>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="w-full h-[34px] mt-[15px] flex justify-between items-center bg-[#eef1ff] ">
        <p className="text-[#4254ff] text-[14px] py-[12px] pl-[20px]">
          Red Lions won the toss and elected to bat first
        </p>
        <img src={live} alt="live" className="mr-[20px] " />
      </div>
    </div>
  );
};

export default MatchCard;
