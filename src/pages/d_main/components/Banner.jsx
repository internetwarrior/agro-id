import React from "react";
import Left from "../../../static/svg/IconArrowLeft.svg";
import Right from "../../../static/svg/IconArrowRight.svg";
import DraftImage from "../../../static/draft/AdobeStock_502573919 1 1.png";

function Banner() {
  return (
    <div className=" card-gradient rounded-[8px] shadow-lg px-[16px] pt-[18px] pb-[16px] text-white flex ">
      <div className="flex-grow">
        <div className="flex gap-4 text-[12px] mb-[14px] ">
          <div>#Tag</div>
          <div>#Tag</div>
        </div>
        <h1 className="mb-[14px] font-bold text-[24px] ">Агрорусь 2023</h1>
        <div>
          <div className=" color-default opacity-80">
            Санкт-Петербург, Экспофорум
          </div>
          <div className=" text-[12px] color-default opacity-80">
            30 августа - 1 сентября
          </div>
        </div>
        <div className="mt-[16px] flex gap-2">
          <button className=" bg-[#EAF0E4] rounded-full">
            <img src={Left} alt="" />
          </button>{" "}
          <button className=" bg-[#EAF0E4] rounded-full">
            <img src={Right} alt="" />
          </button>
        </div>
      </div>
      <div>
        <div className="w-[290px] h-[156px] ">
          <img
            className=" w-full h-full object-cover"
            src={DraftImage}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
