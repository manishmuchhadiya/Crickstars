import React from "react";

const Overs = () => {
  const data = [
    {
      over: "O: 1, R: 10",
      text: "Kejas to Kunal , Aabhi, Kapil",
      balls: ["1", "2", "0"],
      labels: [],
    },
    {
      over: "O: 2, R: 12",
      text: "Harsh to Kunal, Aabhi, Kapil",
      balls: ["1", "0", "0", "1", "0", "4"],
      labels: [],
    },
    {
      over: "O: 3, R: 10",
      text: "Rohit to Aabhi, Kapil",
      balls: ["6", "0", "1", "0", "0", "0"],
      labels: ["WK", "NB", "Bye", "LB"],
    },
    {
      over: "O: 4, R: 9",
      text: "Soham to Aabhi, Kapil",
      balls: ["2", "1", "2", "6", "2"],
      labels: ["NB", "WK", "WD"],
    },
    {
      over: "O: 5, R: 4",
      text: "Bali to Karan, Ravi",
      balls: ["1", "2", "0"],
      labels: [],
    },
    {
      over: "O: 6, R: 9",
      text: "Vicky to Ravi, Karan",
      balls: ["1", "0", "0", "1", "0", "4"],
      labels: [],
    },
    {
      over: "O: 7, R: 9",
      text: "Harsh to Karan, Ravi, Peter",
      balls: ["W", "1", "2", "0", "0"],
      labels: ["WK", "NB", "Bye", "LB"],
    },
    {
      over: "O: 8, R: 4",
      text: "Soham to Karan, Ravi, Peter",
      balls: ["NB", "1", "2", "6", "2"],
      labels: ["NB", "WK", "WD"],
    },
  ];

  const getBallColor = (b) => {
    if (b === "W") return "bg-[#FF5959] text-white"; // Red WK
    if (b === "NB" || b === "WD") return "bg-[#4A9EFF] text-white"; // Blue NB/WD
    if (b === "6") return "bg-[#3EAF4F] text-white"; // Green 6
    return "bg-[#D6D1C8] text-[#333]"; // Grey normal
  };

  return (
    <div className="w-[568px] bg-[#F3F3F3] p-[30px] rounded-b-[10px]">
      <div className="flex flex-col gap-[28px]">
        {data.map((row, index) => (
          <div key={index} className="pb-[16px] border-b border-[#E0E0E0]">
            {/* ---------- TOP ROW ---------- */}
            <div className="flex justify-between items-center">
              <p className="text-[14px] text-[#1B4CF2] font-semibold">
                {row.over}
              </p>
              <p className="text-[15px] text-black">{row.text}</p>
            </div>

            {/* ---------- BALL ROW ---------- */}
            <div className="flex gap-[8px] mt-[10px]">
              {row.balls.map((b, i) => (
                <div
                  key={i}
                  className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-[13px] font-semibold ${getBallColor(
                    b
                  )}`}
                >
                  {b}
                </div>
              ))}
            </div>

            {/* ---------- LABEL ROW ---------- */}
            {row.labels.length > 0 && (
              <div className="flex gap-[14px] mt-[8px] text-[12px] text-[#7B7B7B]">
                {row.labels.map((label, i) => (
                  <span key={i}>{label}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overs;
