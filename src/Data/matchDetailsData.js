// matchDetailsData.js
import phoenixElevenLogo from "../assets/phoenixElevenLogo.png";
import redLionsLogo from "../assets/lion.png";
import goodElevenzzLogo from "../assets/goodElevenzzLogo.png";
import lightningCheetahLogo from "../assets/lightningCheetahLogo.png";

export const matchDetailsData = [
  {
    id: 1,
    teamLogo: redLionsLogo,
    teamName: "Red Lions",
    score: "207-6",
    overs: 23.2,
    neededRuns: null,
    ballsLeft: null,
    crr: null,
    batsmen: [
      { name: "Player 1", R: 50, B: 30, _4s: 5, _6s: 2, SR: 166.6 },
      { name: "Player 2", R: 30, B: 25, _4s: 2, _6s: 1, SR: 120.0 },
    ],
    bowlers: [{ name: "Bowler 1", O: 4, M: 0, R: 25, W: 1, Eco: 6.25 }],
  },
  {
    id: 2,
    teamLogo: phoenixElevenLogo,
    teamName: "Phoenix Eleven",
    score: "16-1",
    overs: 0.4,
    neededRuns: 191,
    ballsLeft: 116,
    crr: 24.0,
    batsmen: [
      { name: "Nitesh*", R: 6, B: 1, _4s: 0, _6s: 0, SR: 600.0 },
      { name: "Jay", R: 6, B: 1, _4s: 0, _6s: 0, SR: 600.0 },
    ],
    bowlers: [{ name: "Hardik", O: 0.4, M: 0, R: 16, W: 1, Eco: 24.0 }],
  },
  {
    id: 3,
    teamLogo: goodElevenzzLogo,
    teamName: "Good Elevenzz",
    score: "167-4",
    overs: 20.0,
    neededRuns: null,
    ballsLeft: null,
    crr: null,
    batsmen: [{ name: "Player 1", R: 70, B: 45, _4s: 6, _6s: 2, SR: 155.5 }],
    bowlers: [{ name: "Bowler 1", O: 4, M: 0, R: 20, W: 2, Eco: 5.0 }],
  },
  {
    id: 4,
    teamLogo: lightningCheetahLogo,
    teamName: "Lightning Cheetah",
    score: "402-6",
    overs: 50.0,
    neededRuns: null,
    ballsLeft: null,
    crr: null,
    batsmen: [{ name: "Player 1", R: 120, B: 60, _4s: 10, _6s: 5, SR: 200.0 }],
    bowlers: [{ name: "Bowler 1", O: 10, M: 0, R: 60, W: 3, Eco: 6.0 }],
  },
];

// Optional NoData placeholder
export const NoData = {
  teamLogo: null,
  teamName: "No Data",
  score: "--",
  overs: "--",
  neededRuns: null,
  ballsLeft: null,
  crr: null,
  batsmen: [],
  bowlers: [],
};
