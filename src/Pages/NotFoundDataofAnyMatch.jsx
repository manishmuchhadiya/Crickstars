import React from "react";
import Header from "../components/common/Header";
import Left from "../components/common/Left";
import Right1 from "../components/common/Right1";
import Right2 from "../components/common/Right2";
import NoDataCard from "../components/OpponentYetToBat/NoDataCard";

const NotFoundDataofAnyMatch = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[1440px] bg-[#fff]">
        {/* Header   */}
        <Header showBack={true} />

        {/* left Section */}
        <div className="flex justify-between">
          <div className="pl-[100px]">
            <Left />
          </div>

          {/* Mid Section */}
          <div className="w-[568px] h-[770px] flex justify-center items-center bg-[#FFFFFF] shadow-[0_4px_25px_0_rgba(0,0,0,0.05)] rounded-[20px]">
            <NoDataCard />
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
export default NotFoundDataofAnyMatch;
