// import React from "react";
// import Header from "../MyMatch/Header";
// import Left from "../MyMatch/Left";
// import MatchCard from "../MyMatch/MatchCard";
// import Right1 from "../MyMatch/Right1";
// import Right2 from "../MyMatch/Right2";

// // Import images for Objects
// import redLionsLogo from "../../assets/lion.png";
// import furyTigersLogo from "../../assets/tiger.png";
// import onGing from "../../assets/onGing.svg";
// import viewResult from "../../assets/viewResult.png";
// import live from "../../assets/live.svg";
// import alligatorLogo from "../../assets/alligatorLogo.png";
// import phoenixElevenLogo from "../../assets/phoenixElevenLogo.png";
// import goodElevenzzLogo from "../../assets/goodElevenzzLogo.png";
// import blueDragonsLogo from "../../assets/blueDragonsLogo.png";
// import lightningCheetahLogo from "../../assets/lightningCheetahLogo.png";
// import viperKingsLogo from "../../assets/viperKingsLogo.png";

// const data = [
//   {
//     Individual_match: "Individual match",
//     Match_Date: "November 11, 2023",
//     logo1: redLionsLogo,
//     logo2: furyTigersLogo,
//     live: live,
//     statuse: onGing,
//     Team_name1: "Red Lions",
//     Team_name2: "Fury Tigers",
//     Run: "207-6",
//     Over: 23.2,
//     Yet_to_bat: "Yet to bat..",
//     Toss_win: "Red Lions won the toss and elected to bat first",
//   },
//   {
//     Individual_match: "Individual match",
//     Match_Date: "November 11, 2023",
//     logo1: alligatorLogo,
//     logo2: phoenixElevenLogo,
//     live: live,
//     statuse: onGing,
//     Team_name1: "Alligator",
//     Team_name2: "Phoenix Eleven",
//     Run: "169-4",
//     Over: 25.1,
//     Yet_to_bat: "Yet to bat..",
//     Toss_win: "Phoenix Eleven won the toss and elected to bawl first",
//   },
//   {
//     Individual_match: "Individual match",
//     Match_Date: "November 11, 2023",
//     logo1: goodElevenzzLogo,
//     logo2: blueDragonsLogo,
//     live: "",
//     statuse: viewResult,
//     Team_name1: "Good Elevenzz",
//     Team_name2: "Blue Dragons",
//     Run: "167-4",
//     Over: 20.0,
//     Yet_to_bat: "132-10 (16.4 Over)",
//     Toss_win: "Good Elevenzz won the match by 35 runs",
//   },
//   {
//     Individual_match: "Individual match",
//     Match_Date: "November 11, 2023",
//     logo1: lightningCheetahLogo,
//     logo2: viperKingsLogo,
//     live: "",
//     statuse: viewResult,
//     Team_name1: "Lightning Cheetah",
//     Team_name2: "Viper Kings",
//     Run: "402-6",
//     Over: 50.0,
//     Yet_to_bat: "381-10 (43.2 Over)",
//     Toss_win: "Lightning Cheetahs won the match by 21 runs",
//   },
// ];

// const MyMatch = () => {
//   return (
//     <div className="flex items-center justify-center">
//       <div className="w-[1440px] bg-[#fff]">
//         <Header />

//         <div className="flex justify-between">
//           <div className="pl-[100px]">
//             <Left />
//           </div>

//           <div className="h-[754px] overflow-y-scroll mx-5 flex flex-col items-center scrollbar-hide">
//             <h1 className="mb-[30px] text-[24px] font-bold w-[568px]">
//               All Match
//             </h1>

//             {data.map((item, index) => (
//               <MatchCard
//                 key={index}
//                 Individual_match={item.Individual_match}
//                 Match_Date={item.Match_Date}
//                 logo1={item.logo1}
//                 logo2={item.logo2}
//                 live={item.live}
//                 statuse={item.statuse}
//                 Team_name1={item.Team_name1}
//                 Team_name2={item.Team_name2}
//                 Run={item.Run}
//                 Over={item.Over}
//                 Yet_to_bat={item.Yet_to_bat}
//                 Toss_win={item.Toss_win}
//               />
//             ))}
//           </div>

//           <div className="pr-[100px] flex flex-col">
//             <div className="mb-[20px]">
//               <Right1 />
//             </div>
//             <Right2 />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyMatch;
import React from "react";

// Component Imports
import Header from "../MyMatch/Header";
import Left from "../MyMatch/Left";
import MatchCard from "../MyMatch/MatchCard";
import Right1 from "../MyMatch/Right1";
import Right2 from "../MyMatch/Right2";

// Image Imports
import redLionsLogo from "../../assets/lion.png";
import furyTigersLogo from "../../assets/tiger.png";
import onGing from "../../assets/onGing.svg";
import viewResult from "../../assets/viewResult.png";
import live from "../../assets/live.svg";
import alligatorLogo from "../../assets/alligatorLogo.png";
import phoenixElevenLogo from "../../assets/phoenixElevenLogo.png";
import goodElevenzzLogo from "../../assets/goodElevenzzLogo.png";
import blueDragonsLogo from "../../assets/blueDragonsLogo.png";
import lightningCheetahLogo from "../../assets/lightningCheetahLogo.png";
import viperKingsLogo from "../../assets/viperKingsLogo.png";

// Data Array
const data = [
  {
    Individual_match: "Individual match",
    Match_Date: "November 11, 2023",
    logo1: redLionsLogo,
    logo2: furyTigersLogo,
    live: live,
    statuse: onGing,
    Team_name1: "Red Lions",
    Team_name2: "Fury Tigers",
    Run: "207-6",
    Over: 23.2,
    Yet_to_bat: "Yet to bat..",
    Toss_win: "Red Lions won the toss and elected to bat first",
  },
  {
    Individual_match: "Individual match",
    Match_Date: "November 11, 2023",
    logo1: alligatorLogo,
    logo2: phoenixElevenLogo,
    live: live,
    statuse: onGing,
    Team_name1: "Alligator",
    Team_name2: "Phoenix Eleven",
    Run: "169-4",
    Over: 25.1,
    Yet_to_bat: "Yet to bat..",
    Toss_win: "Phoenix Eleven won the toss and elected to bowl first",
  },
  {
    Individual_match: "Individual match",
    Match_Date: "November 11, 2023",
    logo1: goodElevenzzLogo,
    logo2: blueDragonsLogo,
    live: "",
    statuse: viewResult,
    Team_name1: "Good Elevenzz",
    Team_name2: "Blue Dragons",
    Run: "167-4",
    Over: 20.0,
    Yet_to_bat: "132-10 (16.4 Over)",
    Toss_win: "Good Elevenzz won the match by 35 runs",
  },
  {
    Individual_match: "Individual match",
    Match_Date: "November 11, 2023",
    logo1: lightningCheetahLogo,
    logo2: viperKingsLogo,
    live: "",
    statuse: viewResult,
    Team_name1: "Lightning Cheetah",
    Team_name2: "Viper Kings",
    Run: "402-6",
    Over: 50.0,
    Yet_to_bat: "381-10 (43.2 Over)",
    Toss_win: "Lightning Cheetahs won the match by 21 runs",
  },
];

const MyMatch = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[1440px] bg-[#fff]">
        <Header />

        <div className="flex justify-between">
          {/* LEFT */}
          <div className="pl-[100px]">
            <Left />
          </div>

          {/* CENTER SCROLL LIST */}
          <div className="h-[754px] overflow-y-scroll mx-5 flex flex-col items-center scrollbar-hide">
            <h1 className="mb-[30px] text-[24px] font-bold w-[568px]">
              All Match
            </h1>

            {data.map((item, index) => (
              <MatchCard
                key={index}
                Individual_match={item.Individual_match}
                Match_Date={item.Match_Date}
                logo1={item.logo1}
                logo2={item.logo2}
                live={item.live}
                statuse={item.statuse}
                Team_name1={item.Team_name1}
                Team_name2={item.Team_name2}
                Run={item.Run}
                Over={item.Over}
                Yet_to_bat={item.Yet_to_bat}
                Toss_win={item.Toss_win}
              />
            ))}
          </div>

          {/* RIGHT */}
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

export default MyMatch;
