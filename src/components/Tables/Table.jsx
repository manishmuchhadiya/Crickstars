import React, { useState, useRef, useEffect } from "react";

import Batting from "./Batting";
import Bowling from "./Bowling";
import FallOfWicket from "./FallOfWicket";
import Partnerships from "./Partnerships";
import Overs from "./Overs";

const tabs = ["Batting", "Bowling", "Fall of Wicket", "Partnerships", "Overs"];

const Table = () => {
  const [activeTab, setActiveTab] = useState("Batting");
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
  });

  const tabRefs = useRef([]);

  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    const tabElement = tabRefs.current[index];

    if (tabElement) {
      setUnderlineStyle({
        width: tabElement.offsetWidth,
        left: tabElement.offsetLeft,
      });
    }
  }, [activeTab]);

  // 👉 Function to show selected table
  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Batting":
        return <Batting />;
      case "Bowling":
        return <Bowling />;
      case "Fall of Wicket":
        return <FallOfWicket />;
      case "Partnerships":
        return <Partnerships />;
      case "Overs":
        return <Overs />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* TABS ROW */}
      <div className="w-[568px] relative rounded-t-[20px] shadow-[0_4px_25px_0_rgba(0,0,0,0.05)]">
        <div className="flex justify-evenly text-[16px] font-semibold py-[15px] relative">
          {tabs.map((tab, index) => (
            <p
              key={tab}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 cursor-pointer transition-all ${
                activeTab === tab ? "text-blue-600" : "text-black"
              }`}
            >
              {tab}
            </p>
          ))}

          {/* FULL GREY LINE */}
          <span className="absolute bottom-0 left-0 w-full h-[7px] bg-[#71717126]"></span>

          {/* MOVING BLUE UNDERLINE */}
          <span
            className="absolute bottom-0 h-[7px] bg-blue-600 rounded-full transition-all duration-300"
            style={{
              width: underlineStyle.width,
              left: underlineStyle.left,
            }}
          ></span>
        </div>
      </div>

      {/* ACTIVE TABLE BELOW */}
      <div className="">{renderActiveComponent()}</div>
    </>
  );
};

export default Table;
