import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/common/Header";
import Left from "../components/common/Left";
import Right1 from "../components/common/Right1";
import Right2 from "../components/common/Right2";

import MatchCard from "../components/midSection/MatchCard";
import { matchesData } from "../Data/matchesData";

const MyMatch = () => {
  return (
    // <div className="flex items-center justify-center sticky ">
    <div className="w-[1440px] bg-[#fff]">
      {/* header */}
      <Header />

      <div className="flex justify-between">
        {/* LEFT */}
        <div className="pl-[100px] ">
          <Left />
        </div>

        {/* MID SECTION */}
        <div className="mx-[20px] flex flex-col">
          <h1 className="mb-[30px] text-[24px] font-bold w-[568px]">
            All Match
          </h1>

          {matchesData.map((item) => (
            <Link
              key={item.id}
              to={`/my-matches/${item.id}`}
              className="cursor-pointer"
            >
              <MatchCard {...item} />
            </Link>
          ))}
        </div>

        {/* RIGHT */}
        <div className="pr-[100px] flex flex-col">
          <div className="mb-[20px]">
            <Right1 />
          </div>
          <Right2 />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MyMatch;
