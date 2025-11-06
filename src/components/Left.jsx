import React from "react";
import ad from "../assets/leftBanner.png"; // replace with your image

const Left = () => {
  return (
    <div className="w-[316px] h-[490px]">
      <img
        src={ad}
        alt="left ad"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default Left;
