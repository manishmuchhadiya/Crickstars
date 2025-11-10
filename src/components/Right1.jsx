import React from "react";
import ad from "../assets/right.png";
import playStore from "../assets/GooglePlay.svg";
import appStore from "../assets/AppStore.svg";

const Right1 = () => {
  return (
    <div className="w-[316px] h-[200px] relative rounded-lg overflow-hidden">
      <img src={ad} alt="ad1" className="w-full h-full object-cover " />
      <div className="absolute bottom-[28px] w-full flex justify-around px-[35px]  ">
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

export default Right1;
