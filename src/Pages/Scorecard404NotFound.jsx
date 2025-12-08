import React from "react";
import Header from "../components/common/Header";
import Err404 from "../assets/404.svg";
import bg404 from "../assets/404Bg.svg";

const Scorecard404NotFound = () => {
  return (
    <>
      <div className="w-[1440px] h-screen fixed ">
        <div className="w-full h-[88px]  ">
          {/* Header   */}
          <Header />
        </div>

        <div className="h-[550px] w-[1440px] flex justify-center items-center  ">
          <div className="w-[778.14px] h-[321px] flex justify-center">
            <div className="w-full h-[212.97px] ">
              <img src={bg404} alt="BG" />
            </div>
            <div className=" w-[603px] h-[241px] absolute top-[283px] flex flex-col justify-center items-center">
              <div className=" w-[500px] h-[141px] flex flex-col items-center justify-center  ">
                <img
                  src={Err404}
                  alt=""
                  srcset=""
                  className="w-[273.31px] h-[96px] "
                />
                <h1 className=" text-[32px]  text-center">
                  Oops! Page not found.
                </h1>
              </div>
              <div>
                <p className="text-[#717171] text-[20px] font-medium text-center mt-[33px] ">
                  It looks like the link you followed doesn’t exist. Please
                  check the URL or head back home!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scorecard404NotFound;
