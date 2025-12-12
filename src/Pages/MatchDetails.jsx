// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import Header from "../components/common/Header";
// import Left from "../components/common/Left";
// import Right1 from "../components/common/Right1";
// import Right2 from "../components/common/Right2";

// import SummaryScorecard from "../components/midSection/SummaryScorecard";
// import { matchesData } from "../Data/matchesData";
// import Scorecard404NotFound from "./Scorecard404NotFound";

// const MatchDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const match = matchesData.find((item) => item.id.toString() === id);
//   if (!match) return <Scorecard404NotFound />;

//   // if (!match) return <h1>No Match Found</h1>;

//   return (
//     // <div className="flex items-center justify-center ">
//     <div className="w-[1440px] bg-white">
//       <Header
//         showBack={true}
//         showRight={true}
//         onBackClick={() => navigate("/")}
//         onRefresh={() => console.log("Refresh Data")}
//       />

//       <div className="flex justify-between">
//         {/* LEFT */}
//         <div className="pl-[100px] ">
//           <Left />
//         </div>

//         {/* MID */}
//         <div className="mx-[20px] flex flex-col">
//           <SummaryScorecard match={match} />
//         </div>

//         {/* RIGHT */}
//         <div className="pr-[100px] flex flex-col">
//           <div className="mb-[20px]">
//             <Right1 />
//           </div>
//           <Right2 />
//         </div>
//       </div>
//     </div>
//     //    </div>
//   );
// };

// export default MatchDetails;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/common/Header";
import Left from "../components/common/Left";
import Right1 from "../components/common/Right1";
import Right2 from "../components/common/Right2";

import SummaryScorecard from "../components/midSection/SummaryScorecard";
import { matchesData } from "../Data/matchesData";
import { matchDetailsData } from "../Data/matchDetailsData"; // Import new data
import Scorecard404NotFound from "./Scorecard404NotFound";

const MatchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find match from matchesData (for basic info)
  const match = matchesData.find((item) => item.id.toString() === id);

  // Find detailed match data from matchDetailsData
  const matchDetails = matchDetailsData.find(
    (item) => item.id.toString() === id
  );

  // If no match found, show 404
  if (!match || !matchDetails) return <Scorecard404NotFound />;

  return (
    <div className="w-[1440px] bg-white">
      <Header
        showBack={true}
        showRight={true}
        onBackClick={() => navigate("/")}
        onRefresh={() => console.log("Refresh Data")}
      />

      <div className="flex justify-between">
        {/* LEFT */}
        <div className="pl-[100px] ">
          <Left />
        </div>

        {/* MID - Pass both match and matchDetails */}
        <div className="mx-[20px] flex flex-col">
          <SummaryScorecard match={match} matchDetails={matchDetails} />
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
  );
};

export default MatchDetails;
