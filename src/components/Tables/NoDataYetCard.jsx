import React from "react";

const NoDataYetCard = () => {
  return (
    <div className="w-[568px] h-[344px] flex justify-center items-center rounded-b-[20px] ">
      <div className=" w-[297px] h-[67] ">
        <h1 className="text-center text-[24px] font-bold">No data yet</h1>
        <p className="text-center text-[16px] font-medium text-[#717171]">
          This section will update once data is available.
        </p>
      </div>
    </div>
  );
};

export default NoDataYetCard;
