// import React from "react";
// import SummaryScorecard from "../MyMatch2/SummaryScorecard";
// import redLionsLogo from "../../assets/lion.png";
// import furyTigersLogo from "../../assets/tiger.png";

// const MatchScrorCard = () => {
//   return (
//     <>
//       {/* button */}
//       <div>
//         <SummaryScorecard />
//       </div>

//       {/* card */}
//       <div className="w-[568px] h-[155px] border-1 mb-[14px] mt-[20px] flex">
//         <div className="w-[281px] h-[149px] border-1">
//           <img src={redLionsLogo} alt="logo1" />
//           <p>Red Lions</p>
//           <h1>207-6 (20 / 20)</h1>
//         </div>
//         <div>
//           <img src={furyTigersLogo} alt="logo2" />
//           <p>Phoenix 11</p>
//           <p>Yet to bet...</p>
//         </div>
//       </div>
//       <div className="w-[568px] h-[70px] border-1 mb-[20px] text-[#6727AA] bg-[#6727AA1A] rounded-[20px] pl-[20px] pt-[12px] text-[14px] font-medium">
//         <span className="w-full">
//           <b>&lt;Team Name&gt;</b>
//           scored <b> 93</b> runs, and the revised target for
//           <b>&lt;Opponent Team&gt; </b>was set to <b>103.</b>
//         </span>
//       </div>

//       {/* Table */}
//       <div className="w-[568px] border-1 h-[643px]">
//         <table className="border-1">
//           <thead>
//             <tr>
//               <th className="border-1">Betting</th>
//               <th className="border-1">Bowling</th>
//               <th className="border-1">Fall of Wicket</th>
//               <th className="border-1">Partnerships</th>
//               <th className="border-1">Overs</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td className="border-1">Batsman</td>
//               <td className="border-1">R</td>
//               <td className="border-1">B</td>
//               <td className="border-1">4s</td>
//               <td className="border-1">6s</td>
//               <td className="border-1">SR</td>
//             </tr>
//             <tr>
//               <td className="border-1">
//                 Nithes <p>Run Out (Parth)</p>
//               </td>
//               <td className="border-1">67</td>
//               <td className="border-1">37</td>
//               <td className="border-1">3</td>
//               <td className="border-1">5</td>
//               <td className="border-1">181.8</td>
//             </tr>
//             <tr>
//               <td className="border-1">
//                 Jay <p>c Peter b Kejash</p>
//               </td>
//               <td className="border-1">50</td>
//               <td className="border-1">24</td>
//               <td className="border-1">7</td>
//               <td className="border-1">3</td>
//               <td className="border-1">208.33</td>
//             </tr>
//             <tr>
//               <td className="border-1">
//                 Akshat*<p>Not Out </p>
//               </td>
//               <td className="border-1">32</td>
//               <td className="border-1">12</td>
//               <td className="border-1">4</td>
//               <td className="border-1">0</td>
//               <td className="border-1">266.66</td>
//             </tr>
//             <tr>
//               <td className="border-1">
//                 Rishabh <p>Run Out (Mihir)</p>
//               </td>
//               <td className="border-1">82</td>
//               <td className="border-1">49</td>
//               <td className="border-1">8</td>
//               <td className="border-1">5</td>
//               <td className="border-1">167.34</td>
//             </tr>
//             <tr>
//               <td className="border-1">
//                 Kunal (c) <p>c Bali b Rana</p>
//               </td>
//               <td className="border-1">73</td>
//               <td className="border-1">51</td>
//               <td className="border-1">10</td>
//               <td className="border-1">4</td>
//               <td className="border-1">143.13</td>
//             </tr>
//             <tr>
//               <td className="border-1">
//                 Tushar <p>Run Out (Parth)</p>
//               </td>
//               <td className="border-1">17</td>
//               <td className="border-1">8</td>
//               <td className="border-1">3</td>
//               <td className="border-1">0</td>
//               <td className="border-1">212.5</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default MatchScrorCard;

import React from "react";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Triangle } from "lucide-react";

import SummaryScorecard from "../MyMatch2/SummaryScorecard";
import redLionsLogo from "../../assets/lion.png";
import furyTigersLogo from "../../assets/tiger.png";

const MatchScrorCard = () => {
  return (
    <>
      {/* Tabs */}
      <SummaryScorecard />

      {/* SCORE HEADER BOX */}
      <div className="w-[568px] h-[155px] mb-[14px] mt-[20px] flex justify-between border border-gray-200 rounded-xl  p-[20px]">
        {/* LEFT TEAM */}
        <div className=" flex">
          <div className=" w-[264px] relative">
            <img src={redLionsLogo} alt="logo1" className="w-[45px]" />
            <p className="font-semibold text-[18px] ">Red Lions</p> {/* Up */}
            <span className="flex flex-row-reverse  mr-[20px] text-blue-600">
              <Triangle className=" w-4 h-4 fill-blue-600 absolute" />
            </span>
            <h1 className="text-[35px] font-semibold ">
              207-6 <span className="text-[16px] font-medium">(20 / 20)</span>
            </h1>
          </div>
          {/* RIGHT TEAM */}
          <div className="flex flex-col items-end   w-[264px] relative">
            <img src={furyTigersLogo} alt="logo2" className="w-[45px]" />
            <p className="font-semibold text-[18px] py-[3px]">Phoenix 11 </p>
            {/* Down */}
            <span className="text-[#717171]">
              <Triangle className="w-4 h-4 fill-[#717171] rotate-180 absolute bottom-5.5 right-58 " />
            </span>
            <p className="text-gray-500 text-[18px]">Yet to bat...</p>
          </div>
        </div>
      </div>

      {/* SHORT INFO BOX */}
      <div className="w-[568px] h-[70px] mb-[20px] text-[#6727AA] bg-[#6727AA1A] rounded-[20px] px-[20px] py-[20px] text-[14px] font-medium leading-tight">
        <b>&lt;Team Name&gt;</b> scored <b>93</b> runs, and the revised target
        for <b>&lt;Opponent Team&gt;</b> was set to <b>103</b>.
      </div>

      {/* TABS ROW */}
      <div className="w-[568px] flex justify-evenly border-1 text-[16px] font-semibold py-[30px] ">
        <p className="px-3 py-2  text-blue-600">Batting</p>
        <p className="px-3 py-2 ">Bowling</p>
        <p className="px-3 py-2  ">Fall of Wicket</p>
        <p className="px-3 py-2  ">Partnerships</p>
        <p className="px-3 py-2 ">Overs</p>
      </div>

      {/* TABLE */}
      <div className="w-[568px] border border-gray-200 rounded-md overflow-hidden">
        <table className="w-full text-left text-[14px]">
          {/* TABLE HEADER */}
          <thead className="bg-gray-50 border-1]">
            <tr className="border-b">
              <th className="p-2">Batsman</th>
              <th className="p-2">R</th>
              <th className="p-2">B</th>
              <th className="p-2">4s</th>
              <th className="p-2">6s</th>
              <th className="p-2">SR</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-2">
                <p className="font-semibold">Nithes</p>
                <p className="text-gray-500 text-[12px]">Run Out (Parth)</p>
              </td>
              <td className="p-2">67</td>
              <td className="p-2">37</td>
              <td className="p-2">3</td>
              <td className="p-2">5</td>
              <td className="p-2">181.8</td>
            </tr>

            <tr className="border-b">
              <td className="p-2">
                <p className="font-semibold">Jay</p>
                <p className="text-gray-500 text-[12px]">c Peter b Kejash</p>
              </td>
              <td className="p-2">50</td>
              <td className="p-2">24</td>
              <td className="p-2">7</td>
              <td className="p-2">3</td>
              <td className="p-2">208.33</td>
            </tr>

            <tr className="border-b">
              <td className="p-2">
                <p className="font-semibold">Akshat*</p>
                <p className="text-gray-500 text-[12px]">Not Out</p>
              </td>
              <td className="p-2">32</td>
              <td className="p-2">12</td>
              <td className="p-2">4</td>
              <td className="p-2">0</td>
              <td className="p-2">266.66</td>
            </tr>

            <tr className="border-b">
              <td className="p-2">
                <p className="font-semibold">Rishabh</p>
                <p className="text-gray-500 text-[12px]">Run Out (Mihir)</p>
              </td>
              <td className="p-2">82</td>
              <td className="p-2">49</td>
              <td className="p-2">8</td>
              <td className="p-2">5</td>
              <td className="p-2">167.34</td>
            </tr>

            <tr className="border-b">
              <td className="p-2">
                <p className="font-semibold">Kunal (c)</p>
                <p className="text-gray-500 text-[12px]">c Bali b Rana</p>
              </td>
              <td className="p-2">73</td>
              <td className="p-2">51</td>
              <td className="p-2">10</td>
              <td className="p-2">4</td>
              <td className="p-2">143.13</td>
            </tr>

            <tr>
              <td className="p-2">
                <p className="font-semibold">Tushar</p>
                <p className="text-gray-500 text-[12px]">Run Out (Parth)</p>
              </td>
              <td className="p-2">17</td>
              <td className="p-2">8</td>
              <td className="p-2">3</td>
              <td className="p-2">0</td>
              <td className="p-2">212.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MatchScrorCard;
