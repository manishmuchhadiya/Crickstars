import React from "react";
import phoenixElevenLogo from "../../assets/phoenixElevenLogo.png";

const SummaryTable = () => {
  return (
    <>
      <div className=" w-[568px] h-[519px] ">
        {/* team */}
        <div className=" w-full h-[144px]  rounded-[20px] flex justify-between px-[20px] pt-[20px] pb-[30px] shadow-[0_4px_25px_0_rgba(0,0,0,0.05)] bg-[#FFFFFF]">
          <div className="">
            <img src={phoenixElevenLogo} alt="logo" srcset="" />
            <h2 className="text-[18px] font-semibold ]">Phoenix Eleven</h2>
            <p className="text-[14px] font-medium ">
              Need <span className="text-[#2EA850]"> 191 </span> runs in
              <span className="text-[#2EA850]"> 116 </span>
              balls
            </p>
          </div>
          <div className="flex flex-col justify-between items-end">
            <h1 className="text-[50px] font-medium leading-[33px] ">16-1</h1>
            <h3 className="text-[18px font-medium]  ">(0.4 / 20)</h3>
            <p className="text-[14px]  ">
              <span className="text-[#717171] ">CRR - </span>
              24.00
            </p>
          </div>
        </div>

        {/* table */}
        <div className=" w-[568px] h-[355px] mt-[20px]  bg-[#FFFFFF] shadow-[0_4px_25px_0_rgba(0,0,0,0.05)] rounded-[20px]">
          <table className="w-full text-[#717171] text-[16px] font-medium ">
            <thead>
              <tr className=" ">
                <th className="p-[30px] border-0 flex">Batsman</th>
                <th className="border-0 ">R</th>
                <th className="border-0 ">B</th>
                <th className="border-0 ">4s</th>
                <th className="border-0 ">6s</th>
                <th className="border-0 ">SR</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" ">
                <td className="bg-[#71717126] h-[5px]" colSpan={6}></td>
              </tr>
              <tr className="border-0">
                <td className="border-0 px-[30px] pt-[15px] pb-[10px] text-[#3747DE]">
                  Nitesh*
                </td>
                <td className="border-0 text-black text-center">6</td>
                <td className="border-0 text-center text-black">1</td>
                <td className="border-0 text-center">0</td>
                <td className="border-0 text-center">0</td>
                <td className="border-0 text-center">600.00</td>
              </tr>

              <tr className="border-0">
                <td className="border-0 px-[30px]  text-[#3747DE] pt-[10px] pb-[15px]">
                  Jay
                </td>
                <td className="border-0 text-center text-black">6</td>
                <td className="border-0 text-center text-black">1</td>
                <td className="border-0 text-center ">0</td>
                <td className="border-0 text-center ">0</td>
                <td className="border-0 text-center ">00</td>
              </tr>

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
              <tr className=" ">
                <td className="bg-[#71717126] h-[5px]" colSpan={6}></td>
              </tr>
            </tbody>

            <tfoot>
              <tr className="border-0">
                <td className="p-[30px] text-[#3747DE]">
                  Hardik <span className="w-[11px] h-[6.42px]">▼</span>
                </td>
                <td className="border-0 text-center text-black">0.4</td>
                <td className="border-0 text-center ">0</td>
                <td className="border-0 text-center ">16</td>
                <td className="border-0 text-center ">1</td>
                <td className="border-0 text-center ">24.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default SummaryTable;
