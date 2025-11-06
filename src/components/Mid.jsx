import React from "react";
import ongoing from "../assets/Ongoing.svg";
import live from "../assets/live.svg";
import lion from "../assets/lion.png";

const Mid = () => {
  return (
    <div className="w-[568px]">
      <div
        className="w-full h-[166px] mb-[20px] rounded-[20px] shadow-2xs border-1
      
       border-black  "
      >
        {/* border-gray-100 */}

        {/* header */}
        <div className="flex justify-around w-full  h-[34px]">
          <span className="flex items-center text-[14px] text-[#717171] font-medium ">
            Individual match
          </span>
          <img src={ongoing} alt="ongoing" />
          <span className="flex items-center text-[14px] text-[#717171] font-medium ">
            November 11, 2023
          </span>
        </div>

        {/* mid  */}
        <div className="border-1 border-amber-500 w-full h-[98px]">
          <div className="border-1 border-red-700 w-[146px] h-[68px] ml-[20px] my-[15px]">
            <div className="flex  h-[45px] justify-between mb-[10px]">
              <img src={lion} alt="logos" className="w-[45] h-[45]" />
              <span className="text-[18px] font-semibold flex items-center">
                Red Lions
              </span>
            </div>
            <div className="w-full  border-2 ">
              <span className="text-[18px] text-[#3747DE] font-semibold ">
                207-6
              </span>
              <span className="text-[18px] text-[#717171] font-semibold">
                (23.2 Over)
              </span>
            </div>
          </div>
          <div></div>
        </div>

        <div className="border-1 h-[34px]"></div>
        {/* footer */}
        {/* <div className="w-full h-[34px] flex border-1">
          <span className="pl-[20px] py-[12px] text-[14px] text-[#3747DE] font-medium">
            Red Lions won the toss and elected to bat first
          </span>
          <img src={live} alt="live" />
        </div> */}
      </div>
    </div>
  );
};

export default Mid;

// const Mid = () => {
//   const matches = Array(6).fill({
//     team1: "Red Lions",
//     score: "207-6 (23.2 Over)",
//     team2: "Fury Tigers",
//   });

//   return (
//     <div className="w-[568px]">
//         {matches.map((match, index) => (
//       <div className="w-full h-[166px] mb-[20px] rounded-xl shadow-md border border-gray-200 flex justify-between items-center px-4">
//         <div>
//            <h2 className="font-semibold text-lg">{match.team1}</h2>
//            <p className="text-gray-500">{match.score}</p>
//         </div>
//         <div>
//            <h2 className="font-semibold text-lg">{match.team2}</h2>
//           <p className="text-gray-400">Yet to bat</p>
//         </div>
//       </div>
//        ))}
//     </div>
