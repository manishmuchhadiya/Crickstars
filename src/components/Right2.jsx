import React from "react";
import ad from "../assets/bottomBanner.png";
import playStore from "../assets/GooglePlay.svg";
import appStore from "../assets/AppStore.svg";

const Right2 = () => {
  return (
    <div className="w-[316px] h-[490px] relative">
      <img
        src={ad}
        alt="ad2"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute top-[156px] w-full flex justify-around px-[35px]">
        <img
          src={playStore}
          alt="play-store"
          className="w-[110px] cursor-pointer"
        />
        <img
          src={appStore}
          alt="app-store"
          className="w-[110px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Right2;
