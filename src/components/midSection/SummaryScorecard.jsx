// export default SummaryScorecard;
import React, { useState } from "react";
import SummaryTable from "./SummaryTable";
import Table from "../Tables/Table";
import MatchUpdateCard from "../midSection/MatchUpdateCard";
import TeamScoreCard from "../midSection/TeamScoreCard";

const SummaryScorecard = ({ match, matchDetails }) => {
  const [active, setActive] = useState("summary");

  return (
    <div className="w-[568px]">
      {/* Toggle Bar */}
      <div className="w-full h-[78px] rounded-[15px] flex p-[5px] bg-[#ECECEE] relative mb-[20px] shadow-[0_4px_25px_0_rgba(0,0,0,0.05)]">
        <div
          className={`absolute top-[4px] left-[-2px] h-[68px] w-[279px] rounded-[15px] bg-[#3747DE] transition-all duration-300 ease-in-out`}
          style={{
            transform:
              active === "summary" ? "translateX(0px)" : "translateX(284px)",
          }}
        />

        <div
          onClick={() => setActive("summary")}
          className="relative z-10 w-[279px] h-[68px] rounded-[15px] flex items-center justify-center text-[16px] font-semibold cursor-pointer"
          style={{
            color: active === "summary" ? "white" : "black",
          }}
        >
          Summary
        </div>

        <div
          onClick={() => setActive("scorecard")}
          className="relative z-10 w-[279px] h-[68px] rounded-[15px] flex items-center justify-center text-[16px] font-semibold cursor-pointer"
          style={{
            color: active === "scorecard" ? "white" : "black",
          }}
        >
          Scorecard
        </div>
      </div>

      {/* CONTENT UNDER TABS */}
      <div className="">
        {active === "summary" && (
          <div className="text-black">
            {/* Pass matchDetails to SummaryTable */}
            <SummaryTable matchDetails={matchDetails} />
          </div>
        )}

        {active === "scorecard" && (
          <div className="text-black">
            <TeamScoreCard />
            <MatchUpdateCard />
            <div className="w-[568px]">
              <Table />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryScorecard;
