import React from "react";

const Batting = () => {
  return (
    <div className="w-[568px] overflow-hidden rounded-b-[20px]">
      <table className="w-full ">
        <thead>
          <tr className="text-[#717171] text-[16px] font-medium bg-[#F3F3F3]">
            <th className="pl-[28px] py-[14px] text-left w-[40%]">Batsman</th>
            <th className="py-[14px] text-center w-[10%]">R</th>
            <th className="py-[14px] text-center w-[10%]">B</th>
            <th className="py-[14px] text-center w-[10%]">4s</th>
            <th className="py-[14px] text-center w-[10%]">6s</th>
            <th className="py-[14px] text-right w-[20%] pr-[30px]">SR</th>
          </tr>

          <tr>
            <td colSpan={6} className="h-[6px] bg-[#71717126]"></td>
          </tr>
        </thead>

        <tbody className="bg-[#F3F3F3] shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
          {/* Row 1 */}
          <tr>
            <td colSpan={6} className="h-[10px] "></td>
          </tr>
          <tr>
            <td className="pl-[28px] py-[12px]">
              <p className="font-semibold text-blue-600 leading-tight">
                Nitesh
              </p>
              <p className="text-[#7A7A7A] text-[13px]">Run Out (Parth)</p>
            </td>
            <td className="text-center font-medium">67</td>
            <td className="text-center font-medium">37</td>
            <td className="text-center font-medium text-[#717171]">3</td>
            <td className="text-center font-medium text-[#717171]">5</td>
            <td className="text-right font-medium pr-[30px] text-[#717171]">
              181.8
            </td>
          </tr>

          {/* Row 2 */}
          <tr>
            <td className="pl-[28px] py-[12px]">
              <p className="font-semibold text-blue-600">Jay</p>
              <p className="text-[#7A7A7A] text-[13px]">c Peter b Kejash</p>
            </td>
            <td className="text-center font-medium">50</td>
            <td className="text-center font-medium">24</td>
            <td className="text-center font-medium text-[#717171]">7</td>
            <td className="text-center font-medium text-[#717171]">3</td>
            <td className="text-right font-medium pr-[30px] text-[#717171]">
              208.33
            </td>
          </tr>

          {/* Row 3 */}
          <tr>
            <td className="pl-[28px] py-[12px]">
              <p className="font-semibold text-blue-600">Akshat*</p>
              <p className="text-[#7A7A7A] text-[13px]">Not Out</p>
            </td>
            <td className="text-center font-medium">32</td>
            <td className="text-center font-medium">12</td>
            <td className="text-center font-medium text-[#717171]">4</td>
            <td className="text-center font-medium text-[#717171]">0</td>
            <td className="text-right font-medium pr-[30px] text-[#717171]">
              266.66
            </td>
          </tr>

          {/* Row 4 */}
          <tr>
            <td className="pl-[28px] py-[12px]">
              <p className="font-semibold text-blue-600">Rishabh</p>
              <p className="text-[#7A7A7A] text-[13px]">Run Out (Mihir)</p>
            </td>
            <td className="text-center font-medium">82</td>
            <td className="text-center font-medium">49</td>
            <td className="text-center font-medium text-[#717171]">8</td>
            <td className="text-center font-medium text-[#717171]">5</td>
            <td className="text-right font-medium pr-[30px] text-[#717171]">
              167.34
            </td>
          </tr>

          {/* Row 5 */}
          <tr>
            <td className="pl-[28px] py-[12px]">
              <p className="font-semibold text-blue-600">Kunal (c)</p>
              <p className="text-[#7A7A7A] text-[13px]">c Bali b Rana</p>
            </td>
            <td className="text-center font-medium">73</td>
            <td className="text-center font-medium">51</td>
            <td className="text-center font-medium text-[#717171]">10</td>
            <td className="text-center font-medium text-[#717171]">4</td>
            <td className="text-right pr-[30px] font-medium text-[#717171]">
              143.13
            </td>
          </tr>

          {/* Row 6 */}
          <tr>
            <td className="pl-[28px] py-[12px]">
              <p className="font-semibold text-blue-600">Tushar</p>
              <p className="text-[#7A7A7A] text-[13px]">Run Out (Parth)</p>
            </td>
            <td className="text-center font-medium">17</td>
            <td className="text-center font-medium">8</td>
            <td className="text-center font-medium text-[#717171]">3</td>
            <td className="text-center font-medium text-[#717171]">0</td>
            <td className="pr-[30px] text-right font-medium text-[#717171]">
              212.5
            </td>
          </tr>

          <tr>
            <td className="pl-[28px] py-[12px]">
              <p className="font-semibold text-blue-600">Kamal*</p>
              <p className="text-[#7A7A7A] text-[13px]">Not Out</p>
            </td>
            <td className="text-center font-medium">21</td>
            <td className="text-center font-medium">11</td>
            <td className="text-center font-medium text-[#717171]">0</td>
            <td className="text-center font-medium text-[#717171]">3</td>
            <td className="pr-[30px] text-right font-medium text-[#717171]">
              190.90
            </td>
          </tr>

          <tr>
            <td className="pl-[28px] py-[12px]">
              <p className="font-semibold text-blue-600">Maulik*</p>
              <p className="text-[#7A7A7A] text-[13px]">Not Out</p>
            </td>
            <td className="text-center font-medium">4</td>
            <td className="text-center font-medium">1</td>
            <td className="text-center font-medium text-[#717171]">1</td>
            <td className="text-center font-medium text-[#717171]">0</td>
            <td className="pr-[30px] text-right font-medium text-[#717171]">
              400.00
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={6} className="h-[10px] bg-[#F3F3F3]"></td>
          </tr>
          <tr className=" text-[16px] font-medium bg-[#ECECEE]">
            <td className="pl-[28px] py-[14px] text-left w-[40%]">EXTRA</td>
            <td className="py-[14px] text-right w-[20%] pr-[30px]" colSpan={5}>
              10
              <span className="text-[#717171]">( b 0, lb 1, w 2, nb 1 )</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Batting;
