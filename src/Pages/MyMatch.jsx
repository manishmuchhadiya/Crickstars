import React, { useState } from "react";

// Components
import Header from "../components/common/Header";
import Left from "../components/common/Left";
import Right1 from "../components/common/Right1";
import Right2 from "../components/common/Right2";

import SummaryScorecard from "../components/midSection/SummaryScorecard";
import MatchCard from "../components/midSection/MatchCard";

// Data
import { matchesData } from "../Data/matchesData";

const MyMatch = () => {
  const [page, setPage] = useState("list"); // "list" | "details"
  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1440px] bg-[#fff]">
        {/* HEADER */}
        {page === "list" ? (
          <Header />
        ) : (
          <Header
            showBack={true}
            showRight={true}
            onBackClick={() => setPage("list")}
            onRefresh={() => console.log("Refresh Data")}
          />
        )}

        <div className="flex justify-between">
          {/* LEFT */}
          <div className="pl-[100px]">
            <Left />
          </div>

          {/* MID SECTION — CHANGES ONLY HERE */}
          {/* <div className="mx-5 flex flex-col items-center scrollbar-hide"> */}
          <div className="mx-[20px]  flex flex-col  ">
            {/* ⬇ LIST VIEW */}
            {page === "list" && (
              <>
                <h1 className="mb-[30px] text-[24px] font-bold w-[568px]">
                  All Match
                </h1>

                {matchesData.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedMatch(item);
                      setPage("details"); // switch to detail page
                    }}
                  >
                    <MatchCard {...item} />
                  </div>
                ))}
              </>
            )}

            {/* ⬇ DETAILS VIEW */}
            {page === "details" && selectedMatch && (
              // <SummaryTable phoenixElevenLogo={selectedMatch.logo2} />
              <SummaryScorecard />
            )}
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
    </div>
  );
};

export default MyMatch;
