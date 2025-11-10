import React from "react";
import Header from "../components/Header";
import Left from "../components/Left";
import Right1 from "../components/Right1";
import Right2 from "../components/Right2";
import MatchCard from "../components/MatchCard";

const data = [
  {
    Individual_match: "Individual match",
    Match_Date: "November 11, 2023",
    Team_name1: "Red Lions",
    Team_name2: "Fury Tigers",
    Run: 207 - 6,
    Over: 23.2,
    Yet_to_bat: "Yet to bat..",
    Toss_win: "Red Lions won the toss and elected to bat first",
  },
];

const MyMatch = () => {
  console.log(data);

  return (
    <div className="flex items-center justify-center ">
      <div className="w-[1440px]   bg-[#fff]   ">
        {/* Header */}
        <Header />

        {/* Main section */}
        <div className="flex justify-between">
          {/* Left section */}
          <div className="pl-[100px]">
            <Left />
          </div>

          {/* Middle scrollable section */}
          <div className="h-[754px] overflow-y-scroll  mx-5  flex flex-col items-center scrollbar-hide">
            <h1 className="mb-[30px] text-[24px] font-bold w-[568px] ">
              All Match
            </h1>
            <MatchCard Individual_match={data.Individual_match} />
          </div>

          {/* Right section */}
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

export default MyMatch;
