import React, { useState } from "react";
import { Triangle } from "lucide-react";
import redLionsLogo from "../../assets/lion.png";
import furyTigersLogo from "../../assets/tiger.png";

const TeamScoreCard = () => {
  const [activeTeam, setActiveTeam] = useState("left");

  const leftArrowUp = activeTeam === "left";
  const rightArrowUp = activeTeam === "right";

  return (
    <div className="w-[568px] h-[155px] mb-[14px] rounded-[20px] flex shadow-[0_4px_25px_0_rgba(0,0,0,0.05)] ">
      {/* LEFT SIDE */}
      <div
        className={`w-1/2 h-full p-4 rounded-[15px] cursor-pointer relative
          ${activeTeam === "left" ? "bg-[#ECECEE]" : "bg-white"}
        `}
        onClick={() => setActiveTeam("left")}
      >
        <img src={redLionsLogo} alt="logo1" className="w-[45px]" />

        <p className="font-semibold text-[18px]">Red Lions</p>

        {/* ALWAYS SHOW LEFT ARROW */}
        <Triangle
          className={`w-4 h-4 absolute right-[10px] top-[45px] transition-all
            ${
              leftArrowUp
                ? "rotate-0 fill-blue-600 text-blue-600"
                : "rotate-180 fill-[#717171] text-[#717171]"
            }
          `}
        />

        <h1 className="text-[35px] font-semibold">
          207-6 <span className="text-[16px] font-medium">(20 / 20)</span>
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div
        className={`w-1/2 h-full p-4 rounded-[15px] cursor-pointer relative text-right
          ${activeTeam === "right" ? "bg-[#ECECEE]" : "bg-white"}
        `}
        onClick={() => setActiveTeam("right")}
      >
        <img src={furyTigersLogo} alt="logo2" className="w-[45px] ml-auto" />

        <p className="font-semibold text-[18px]">Phoenix 11</p>

        {/* ALWAYS SHOW RIGHT ARROW */}
        <Triangle
          className={`w-4 h-4 absolute left-[10px] top-[45px] transition-all
            ${
              rightArrowUp
                ? "rotate-0 fill-blue-600 text-blue-600"
                : "rotate-180 fill-[#717171] text-[#717171]"
            }
          `}
        />

        <p className="text-gray-500 text-[18px]">Yet to bat...</p>
      </div>
    </div>
  );
};

export default TeamScoreCard;
