import React from "react";

const YetToBet = () => {
  return (
    <div className=" w-[568px] h-[503px] flex justify-center items-center rounded-[20px] shadow-[0_4px_25px_0_rgba(0,0,0,0.05)] bg-[#FFFFFF]">
      <div className=" w-[297px] h-[67px] ">
        <h1 className="text-center text-[24px] font-bold">Yet to bat...</h1>
        <p className="text-center text-[#717171] text-[16px] font-medium">
          This team has not started their batting innings yet.
        </p>
      </div>
    </div>
  );
};

export default YetToBet;
