import React, { useState } from "react";
import DropDownIcon from "../../assets/DropDownIcon.svg";
import { BowlingHighlightData } from "../../Data/BowlingHighlightData";
import BowlingHighlightPopup from "./BowlingHighlightDropdown";

const Bowling = () => {
  // your static bowlers (or you can use BowlingTableData)
  const bowlers = [
    { name: "Aakash", o: 4, m: 0, r: 47, w: 2, eco: "47.4" },
    { name: "Sejal", o: 1, m: 0, r: 21, w: 0, eco: "21.0" },
    { name: "Ravi", o: 1, m: 0, r: 13, w: 0, eco: "13.0" },
    { name: "Nitesh", o: 1, m: 0, r: 16, w: 0, eco: "16.0" },
    { name: "Kunal (c)", o: 1, m: 0, r: 22, w: 0, eco: "22.0" },
  ];

  // state to control popup
  const [openHighlight, setOpenHighlight] = useState(null);
  // openHighlight shape: { bowlerName: string, coords: { left, top } }

  const handleIconClick = (e, bowlerName) => {
    e.stopPropagation();

    // compute coordinates for popup positioning
    const rect = e.currentTarget.getBoundingClientRect();
    // rect.top/bottom are relative to viewport; add scrollY to convert to page coordinates
    const coords = {
      left: rect.left + window.scrollX, // px from left of page
      top: rect.bottom + window.scrollY, // px from top of page (place popup below icon)
    };

    // toggle: if clicking same icon close, else open new
    if (openHighlight && openHighlight.bowlerName === bowlerName) {
      setOpenHighlight(null);
    } else {
      setOpenHighlight({ bowlerName, coords });
    }
  };

  const handleClosePopup = () => setOpenHighlight(null);

  return (
    <div className="w-[568px] overflow-hidden rounded-b-[20px]">
      <table className="w-full">
        <thead>
          <tr className="text-[#717171] text-[16px] font-medium bg-[#F3F3F3]">
            <th className="pl-[28px] py-[14px] text-left w-[40%]">Bowler</th>
            <th className="py-[14px] text-center w-[10%]">O</th>
            <th className="py-[14px] text-center w-[10%]">M</th>
            <th className="py-[14px] text-center w-[10%]">R</th>
            <th className="py-[14px] text-center w-[10%]">W</th>
            <th className="py-[14px] text-right w-[20%] pr-[30px]">Eco</th>
          </tr>

          <tr>
            <td colSpan={6} className="h-[6px] bg-[#71717126]"></td>
          </tr>
        </thead>

        <tbody className="bg-[#F3F3F3] shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
          <tr>
            <td colSpan={6} className="h-[10px]"></td>
          </tr>

          {bowlers.map((b, i) => (
            <tr key={i}>
              <td className="pl-[28px] py-[12px]">
                <div className="flex items-center gap-1 font-semibold text-blue-600">
                  <span>{b.name}</span>

                  {/* icon button — use a button element so it receives events properly */}
                  <button
                    onClick={(e) => handleIconClick(e, b.name)}
                    className="inline-flex items-center justify-center p-0.5"
                    type="button"
                  >
                    <img
                      src={DropDownIcon}
                      alt="dropdown"
                      className="w-[14px] h-[14px]"
                    />
                  </button>
                </div>
              </td>

              <td className="text-center font-medium">{b.o}</td>
              <td className="text-center font-medium">{b.m}</td>
              <td className="text-center font-medium">{b.r}</td>
              <td className="text-center font-medium">{b.w}</td>
              <td className="text-right font-medium pr-[30px] text-[#717171]">
                {b.eco}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={6} className="h-[10px] bg-[#F3F3F3]"></td>
          </tr>
        </tfoot>
      </table>

      {/* render popup if open */}
      {openHighlight && BowlingHighlightData[openHighlight.bowlerName] && (
        <BowlingHighlightPopup
          highlight={BowlingHighlightData[openHighlight.bowlerName]}
          coords={openHighlight.coords}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Bowling;
