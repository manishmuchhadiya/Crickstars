import React, { useEffect } from "react";

/**
 * Props:
 *  - highlight: object from BowlingHighlightData (or null)
 *  - coords: { left: number, top: number } - pixel coords in the page where popup should appear
 *  - onClose: () => void
 *
 * The popup renders a full-screen overlay (dim + blur). The card is absolutely positioned
 * using coords (so it appears near the clicked icon).
 */
const BowlingHighlightPopup = ({ highlight, coords, onClose }) => {
  useEffect(() => {
    // prevent body scroll when popup open
    document.body.style.overflow = highlight ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [highlight]);

  if (!highlight || !coords) return null;

  // a small viewport-safe adjustment so popup doesn't overflow right edge
  const popupWidth = 360;
  const padding = 12;
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  let left = coords.left;
  if (left + popupWidth + padding > viewportWidth) {
    left = Math.max(padding, viewportWidth - popupWidth - padding);
  }

  // show slightly below the icon: coords.top should already be rect.bottom + scrollY
  const style = {
    left: `${left}px`,
    top: `${coords.top + 8}px`, // 8px gap
    width: `${popupWidth}px`,
  };
  return (
    <div className="fixed inset-0 z-[9999]" onMouseDown={onClose}>
      {/* Blur Layer */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-[1]" />

      {/* Popup Card */}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 z-[2] rounded-xl bg-[#FAF4E9] shadow-2xl p-5
                 w-[496px] h-[496px] overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Header Section = 88px */}
        <div className="h-[88px] ">
          <h3 className="text-[24px] font-bold mb-1">Bowling Highlights</h3>
          <p className="text-[16px] font-medium text-gray-600">
            {highlight.name} • {highlight.type}
          </p>
        </div>

        {/* Overs Section */}
        <div className="divide-y">
          {highlight.overs.map((ov, idx) => (
            <div key={idx} className="py-3 h-[102px]  bg-[#F3F3F3]">
              <div className="flex justify-between items-center mb-2 ">
                <span className="text-[16px] font-medium">Over {ov.over}</span>
                <span className="text-[16px] font-medium">{ov.runs} Runs</span>
              </div>

              <div className="flex gap-2 flex-wrap ">
                {ov.balls.map((ball, i) => {
                  const base =
                    "w-7 h-7 flex items-center justify-center rounded-full text-[16px] font-medium";
                  let color = "bg-[#717171] text-white";

                  if (ball.value === 4 || ball.value === 6)
                    color = "bg-green-500 text-white";
                  if (ball.type === "wk" || ball.type === "wicket")
                    color = "bg-red-500 text-white";
                  if (ball.type === "wide") color = "bg-indigo-500 text-white";
                  if (ball.type === "nb") color = "bg-yellow-500 text-white";

                  return (
                    <div key={i} className={`${base} ${color}`}>
                      {ball.value}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BowlingHighlightPopup;
