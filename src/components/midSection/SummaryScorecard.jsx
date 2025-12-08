import React, { useState } from "react";
import { motion } from "framer-motion";
import SummaryTable from "./SummaryTable";
import Table from "../Tables/Table";
import MatchUpdateCard from "../midSection/MatchUpdateCard";
import TeamScoreCard from "../midSection/TeamScoreCard";

const SummaryScorecard = () => {
  const [active, setActive] = useState("summary"); // default: Scorecard active

  return (
    <div className="w-[568px] ">
      {/* Toggle Bar */}
      <div className="w-full h-[78px] rounded-[15px] flex p-[5px] bg-[#ECECEE] relative mb-[20px] shadow-[0_4px_25px_0_rgba(0,0,0,0.05)]">
        {/* Sliding Blue Background */}
        <motion.div
          className="absolute top-[4px] left-[-2px] h-[68px] w-[279px] rounded-[15px] bg-[#3747DE]"
          animate={{
            x: active === "summary" ? 0 : 284, // 279 + 5 gap
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />

        {/* Summary Button */}
        <div
          onClick={() => setActive("summary")}
          className="relative z-10 w-[279px] h-[68px] rounded-[15px] flex items-center justify-center text-[16px] font-semibold cursor-pointer"
          style={{
            color: active === "summary" ? "white" : "black",
          }}
        >
          Summary
        </div>

        {/* Scorecard Button */}
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
          <div
            className="
           text-black"
          >
            <SummaryTable />
          </div>
        )}

        {active === "scorecard" && (
          <div className=" text-black">
            <TeamScoreCard />
            <MatchUpdateCard />
            <div className="w-[568px] ">
              <Table />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryScorecard;
