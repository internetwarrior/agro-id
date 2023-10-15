import React from "react";
import Image from "../../../static/draft/dummyImage.jpg";
import UserIMG from "../../../static/draft/user.png";
import JobSVG from "../../../static/svg/job.svg";
import FromSVG from "../../../static/svg/from.svg";

function User() {
  return (
    <div className="  min-w-[380px] xl:min-w-[0] px-[24px] pt-[24px] pb-[24px] flex flex-col h-[372px] shadow-md rounded-[8px] gap-[8px]">
      <div className=" relative h-full max-h-[190px] rounded-[8px] overflow-hidden">
        <img src={UserIMG} className=" w-full h-full" alt="" />
      </div>
      <div className=" flex justify-between">
        <button className="px-[8px] py-[5px] text-[12px] text-[#4C4C40] outline outline-[#00426947] outline-[0.5px] rounded-[4px]">
          Тендер
        </button>
      </div>
      <h4 className=" font-medium text-[#2B361E] ">
        Касаткина Снежана Владимировна
      </h4>
      <div className=" text-[#4C4C40CC] text-[12px] flex gap-[8px] items-center">
        <img src={JobSVG} alt="" />
        Сельское хозяйство
      </div>
      <div className=" text-[#4C4C40CC] text-[12px] flex gap-[8px] items-center">
        {" "}
        <img src={FromSVG} alt="" />
        Москва
      </div>
    </div>
  );
}

export default User;
