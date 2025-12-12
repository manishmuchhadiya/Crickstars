import React from "react";
import logo from "../../assets/logo-name.svg";
import styles from "./Header.module.css";
import { ArrowLeft, RefreshCw } from "lucide-react";

const Header = ({
  showBack = false,
  showRight = false,
  onBackClick = () => {},
  onRefresh = () => {},
}) => {
  return (
    <header className="w-[1440px] h-[88px] mb-[30px] flex items-center justify-between px-[40px] bg-white border-gray-200 ">
      {/* Left section */}
      <div className="flex items-center gap-[30px] pl-[55px] ">
        {/* Back Arrow (optional) */}
        {showBack && (
          <ArrowLeft
            size={36}
            strokeWidth={2.5}
            className="cursor-pointer hover:opacity-70"
            onClick={onBackClick}
          />
        )}

        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-[189.6px] h-[65px] object-contain"
        />
      </div>

      {/* Right section (optional) */}
      {showRight && (
        <div className="flex items-center gap-[30px] pr-[70px]">
          <div
            className={`bg-[#FF3B30] text-white text-[8px] text-center font-semibold flex justify-center items-center rounded-[5px] w-[30px] h-[16px]  ${styles.liveZoom}`}
          >
            • LIVE
          </div>

          <RefreshCw
            size={22}
            strokeWidth={2.5}
            className="cursor-pointer hover:rotate-180 transition-transform duration-300 w-[36px] h-[36px]"
            onClick={onRefresh}
          />
        </div>
      )}

      {/* If Right Section hidden → keep space balanced */}
      {!showRight && <div className="w-[150px]"></div>}
    </header>
  );
};

export default Header;
