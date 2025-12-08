import React from "react";

const MatchCard = ({
  Individual_match,
  Match_Date,
  logo1,
  logo2,
  live,
  statuse,
  Team_name1,
  Team_name2,
  Run,
  Over,
  Yet_to_bat,
  Toss_win,
}) => {
  return (
    <div
      className="w-[568px] h-[166px] rounded-[20px]
     mb-[20px] bg-[#FFFFFF] shadow-[0_4px_25px_0_rgba(0,0,0,0.05)] "
    >
      {/* Top Section */}
      <div className="w-full h-[34px] rounded-[20px] flex justify-between items-center bg-white px-6 py-3 text-gray-600 text-[14px] mb-[15px]">
        <span>{Individual_match}</span>
        <div className="flex items-center space-x-2">
          <img src={statuse} alt="status" />
        </div>
        <span>{Match_Date}</span>
      </div>

      {/* Teams Section */}
      <div className="w-full h-[64px] flex justify-between items-center bg-white pl-[20px] ">
        {/* Left Team */}
        <div className="flex flex-col justify-center w-[260px]">
          <div className="flex items-center">
            <img src={logo1} alt="Team 1" className="w-[45px] h-[45px]" />
            <h3 className="ml-[15px] py-[16px] font-bold text-lg text-gray-900">
              {Team_name1}
            </h3>
          </div>
          <p className="text-lg text-blue-600 font-semibold">
            {Run}{" "}
            <span className="text-lg text-gray-500 font-normal">
              ({Over} Over)
            </span>
          </p>
        </div>

        <div className="h-10 w-[1px] bg-gray-200  " />

        {/* Right Team */}
        <div className="flex flex-col justify-center mr-[20px] w-[260px]">
          <div className="flex items-center flex-row-reverse">
            <img src={logo2} alt="Team 2" className="w-[45px] h-[45px]" />
            <h3 className="mr-[15px] py-[16px] font-bold text-lg text-gray-900">
              {Team_name2}
            </h3>
          </div>
          <span className="text-lg text-gray-500 font-normal flex flex-row-reverse">
            {Yet_to_bat}
          </span>
        </div>
      </div>

      {/* Bottom Info */}
      {live === "" ? (
        <div className="w-full h-[34px] rounded-b-[20px] mt-[15px] flex justify-center items-center bg-[#eef1ff]">
          <p className="text-[#4254ff] text-[14px] text-center py-[12px] pl-[20px]">
            {Toss_win}
          </p>
        </div>
      ) : (
        <>
          <div className="w-full h-[34px] rounded-b-[20px] mt-[15px] flex justify-between items-center bg-[#eef1ff]">
            <p className="text-[#4254ff] text-[14px] py-[12px] pl-[20px]">
              {Toss_win}
            </p>
            <img src={live} alt="live" className="mr-[20px]" />
          </div>
        </>
      )}
    </div>
  );
};

export default MatchCard;
