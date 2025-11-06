import React from "react";
import logo from "../assets/logo-name.svg"; // replace with your logo path

const Header = () => {
  return (
    <header className="w-[1440px] h-[88px] mb-[30px] flex items-start">
      <img
        src={logo}
        alt="logo"
        className="w-[189.6px] h-[65px] ml-[100px] mt-[23px]"
      />
    </header>
  );
};

export default Header;
