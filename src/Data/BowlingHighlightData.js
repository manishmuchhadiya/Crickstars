// src/Data/BowlingHighlightData.js
export const BowlingHighlightData = {
  Aakash: {
    name: "Aakash",
    type: "Slow Left-Arm",
    overs: [
      {
        over: "21.3",
        runs: 3,
        balls: [
          { value: 1, type: "normal" },
          { value: 2, type: "normal" },
          { value: 0, type: "normal" },
        ],
      },
      {
        over: "16.0",
        runs: 6,
        balls: [
          { value: 1, type: "normal" },
          { value: 0, type: "normal" },
          { value: 0, type: "normal" },
          { value: 1, type: "normal" },
          { value: 0, type: "normal" },
          { value: 4, type: "boundary" },
        ],
      },
      {
        over: "5.0",
        runs: 21,
        balls: [
          { value: 2, type: "normal" },
          { value: 1, type: "normal" },
          { value: 2, type: "normal" },
          { value: 6, type: "boundary" },
          { value: 0, type: "normal" },
          { value: 1, type: "normal" },
        ],
      },
      {
        over: "1.0",
        runs: 17,
        balls: [
          { value: 2, type: "normal" },
          { value: 1, type: "normal" },
          { value: 2, type: "normal" },
          { value: 6, type: "boundary" },
          { value: 2, type: "normal" },
          { value: 2, type: "normal" },
        ],
      },
    ],
  },

  // Add more bowlers here exactly with the key = bowler name used in your table
  Sejal: {
    name: "Sejal",
    type: "Right-arm fast",
    overs: [
      {
        over: "4.0",
        runs: 12,
        balls: [
          { value: 1, type: "normal" },
          { value: 0, type: "normal" },
        ],
      },
    ],
  },

  // etc...
};
