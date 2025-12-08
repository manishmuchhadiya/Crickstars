import React from "react";
import ad from "../../assets/leftBanner.png";
import playStore from "../../assets/GooglePlay.svg";
import appStore from "../../assets/AppStore.svg";

const Left = () => {
  return (
    <div className="w-[316px] h-[490px] relative flex justify-center ">
      <img
        src={ad}
        alt="left ad"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute w-[246px] bottom-[26px] flex justify-around">
        <img
          src={playStore}
          alt="play-store"
          className="w-[110px] cursor-pointer "
        />
        <img
          src={appStore}
          alt="app-store"
          className="w-[110px] cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Left;
