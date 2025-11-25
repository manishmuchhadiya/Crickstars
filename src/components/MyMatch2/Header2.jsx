import React from "react";
import logo from "../../assets/logo-name.svg";
import { ArrowLeft, RefreshCw } from "lucide-react";

const Header2 = () => {
  return (
    <header className="w-[1440px] h-[88px] mb-[30px] flex items-center justify-between px-[40px] bg-white border border-gray-200 rounded-[20px] shadow-[0_4px_25px_0_rgba(0,0,0,0.03)]">
      {/* Left section */}
      <div className="flex items-center gap-[30px] pl-[55px]">
        {/* Back arrow */}
        <ArrowLeft
          size={36}
          strokeWidth={2.5}
          className="cursor-pointer hover:opacity-70"
        />
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-[189.6px] h-[65px] object-contain"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-[30px] pr-[70px]">
        {/* LIVE badge */}
        <div className="bg-[#FF3B30] text-white text-[12px] font-semibold px-[8px] py-[3px] rounded-[5px]">
          LIVE
        </div>

        {/* Refresh icon */}
        <RefreshCw
          size={22}
          strokeWidth={2.5}
          className="cursor-pointer hover:rotate-180 transition-transform duration-300"
        />
      </div>
    </header>
  );
};

export default Header2;
