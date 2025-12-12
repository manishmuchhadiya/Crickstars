import React from "react";

const SummaryTable = ({ matchDetails }) => {
  // Destructure data from matchDetails
  const {
    teamLogo,
    teamName,
    score,
    overs,
    neededRuns,
    ballsLeft,
    crr,
    batsmen,
    bowlers,
  } = matchDetails;

  return (
    <>
      <div className="w-[568px] h-[519px]">
        {/* Team Header */}
        <div className="w-full h-[144px] rounded-[20px] flex justify-between px-[20px] pt-[20px] pb-[30px] shadow-[0_4px_25px_0_rgba(0,0,0,0.05)] bg-[#FFFFFF]">
          <div className="">
            <img src={teamLogo} alt="logo" className="w-[45px] h-[45px]" />
            <h2 className="text-[18px] font-semibold">{teamName}</h2>

            {/* Show "Need runs" only if data exists */}
            {neededRuns && ballsLeft ? (
              <p className="text-[14px] font-medium">
                Need <span className="text-[#2EA850]">{neededRuns}</span> runs
                in
                <span className="text-[#2EA850]"> {ballsLeft}</span> balls
              </p>
            ) : (
              <p className="text-[14px] font-medium text-gray-400">
                Batting first
              </p>
            )}
          </div>

          <div className="flex flex-col justify-between items-end">
            <h1 className="text-[50px] font-medium leading-[33px]">{score}</h1>
            <h3 className="text-[18px] font-medium">({overs} / 20)</h3>

            {/* Show CRR only if exists */}
            {crr && (
              <p className="text-[14px]">
                <span className="text-[#717171]">CRR - </span>
                {crr}
              </p>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="w-[568px] h-[355px] mt-[20px] bg-[#FFFFFF] shadow-[0_4px_25px_0_rgba(0,0,0,0.05)] rounded-[20px]">
          <table className="w-full text-[#717171] text-[16px] font-medium">
            <thead>
              <tr>
                <th className="p-[30px] border-0 flex">Batsman</th>
                <th className="border-0">R</th>
                <th className="border-0">B</th>
                <th className="border-0">4s</th>
                <th className="border-0">6s</th>
                <th className="border-0">SR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-[#71717126] h-[5px]" colSpan={6}></td>
              </tr>

              {/* Map batsmen dynamically */}
              {batsmen.map((batsman, index) => (
                <tr key={index} className="border-0">
                  <td className="border-0 px-[30px] pt-[15px] pb-[10px] text-[#3747DE]">
                    {batsman.name}
                  </td>
                  <td className="border-0 text-black text-center">
                    {batsman.R}
                  </td>
                  <td className="border-0 text-center text-black">
                    {batsman.B}
                  </td>
                  <td className="border-0 text-center">{batsman._4s}</td>
                  <td className="border-0 text-center">{batsman._6s}</td>
                  <td className="border-0 text-center">{batsman.SR}</td>
                </tr>
              ))}

              <tr className="border-0">
                <td className="border-0 px-[30px] pt-[15px] pb-[30px]">
                  Bowlers
                </td>
                <td className="border-0 text-center">O</td>
                <td className="border-0 text-center">M</td>
                <td className="border-0 text-center">R</td>
                <td className="border-0 text-center">W</td>
                <td className="border-0 text-center">Eco</td>
              </tr>
              <tr>
                <td className="bg-[#71717126] h-[5px]" colSpan={6}></td>
              </tr>
            </tbody>

            <tfoot>
              {/* Map bowlers dynamically */}
              {bowlers.map((bowler, index) => (
                <tr key={index} className="border-0">
                  <td className="p-[30px] text-[#3747DE]">
                    {bowler.name} <span className="w-[11px] h-[6.42px]">▼</span>
                  </td>
                  <td className="border-0 text-center text-black">
                    {bowler.O}
                  </td>
                  <td className="border-0 text-center">{bowler.M}</td>
                  <td className="border-0 text-center">{bowler.R}</td>
                  <td className="border-0 text-center">{bowler.W}</td>
                  <td className="border-0 text-center">{bowler.Eco}</td>
                </tr>
              ))}
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default SummaryTable;
