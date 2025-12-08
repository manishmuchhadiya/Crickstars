import React from "react";

const MatchUpdateCard = () => {
  return (
    <div
      className="w-[568px] h-[70px] mb-[20px] text-[#6727AA] bg-[#6727AA1A] rounded-[20px] 
    px-[20px] py-[20px] text-[14px] font-medium leading-tight"
    >
      <b>&lt;Team Name&gt;</b> scored <b>93</b> runs, and the revised target for{" "}
      <b>&lt;Opponent Team&gt;</b> was set to <b>103</b>.
    </div>
  );
};

export default MatchUpdateCard;
