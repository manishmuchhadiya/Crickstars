import React from "react";
import Left from "../MyMatch/Left";
import Right1 from "../MyMatch/Right1";
import Right2 from "../MyMatch/Right2";
import Header2 from "../MyMatch2/Header2";
import MatchScrorCard from "../MyMatch3/MatchScrorCard";

const MyMatch3 = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[1440px] bg-[#fff]">
        {/* Header   */}
        <Header2 />

        {/* left Section */}
        <div className="flex justify-between">
          <div className="pl-[100px]">
            <Left />
          </div>

          {/* Mid Section */}
          <div className="">
            {/* <SummaryTable phoenixElevenLogo={phoenixElevenLogo} /> */}
            <MatchScrorCard />
          </div>

          {/* Right Section */}
          <div className="pr-[100px] flex flex-col">
            <div className="mb-[20px]">
              <Right1 />
            </div>
            <Right2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMatch3;
