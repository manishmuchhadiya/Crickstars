import React from "react";
import Header from "../components/Header";
import Left from "../components/Left";
import Mid from "../components/Mid";
import Right1 from "../components/Right1";
import Right2 from "../components/Right2";

const MyMatch = () => {
  return (
    <div className="w-[1440px] mx-auto bg-[#fff] overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main section */}
      <div className="flex justify-between">
        {/* Left section */}
        <div className="ml-[100px]">
          <Left />
        </div>

        {/* Middle scrollable section */}
        <div className="h-[754px] overflow-y-scroll  mx-5  flex flex-col items-center scrollbar-hide">
          <h1 className="mb-[30px] text-[24px] font-bold w-[568px] ">
            All Match
          </h1>
          <Mid />
          <Mid />
          <Mid />
          <Mid />
          <Mid />
          <Mid />
          <Mid />
          <Mid />
          <Mid />
        </div>

        {/* Right section */}
        <div className="mr-[100px] flex flex-col">
          <div className="mb-[20px]">
            <Right1 />
          </div>
          <Right2 />
        </div>
      </div>
    </div>
  );
};

export default MyMatch;
