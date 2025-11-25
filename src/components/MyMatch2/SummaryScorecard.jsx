import React from "react";

const SummaryScorecard = () => {
  return (
    <div className="w-[568px] h-[78px]  rounded-[15px] flex p-[5px] bg-[#ECECEE]">
      <div className="bg-[#3747DE] w-[279px] h-[68px] ml-[5px] rounded-[15px] flex text-white items-center justify-center text-[16px] font-semibold">
        Summary
      </div>
      <div className="w-[279px] h-[68px] mr-[5px] rounded-[15px] flex items-center justify-center text-[16px] font-semibold">
        Scorecard
      </div>
    </div>
  );
};

export default SummaryScorecard;
