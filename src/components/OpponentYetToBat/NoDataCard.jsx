import React from "react";
import OpponentYetToBatLogo from "../../assets/OpponentYetToBatLogo.svg";

const NoDataCard = () => {
  return (
    <div className=" w-[297px] h-[199px] flex flex-col items-center">
      <img
        src={OpponentYetToBatLogo}
        alt="OpponentYetToBatLogo"
        srcset=""
        className="w-[104px] h-[104px] "
      />
      <div>
        <h1 className="text-[24px] font-bold text-center ">No data found!</h1>
        <p className="text-[16px] font-medium text-center text-[#717171]">
          It looks like the data doesn’t exist. Please try again!
        </p>
      </div>
    </div>
  );
};

export default NoDataCard;
