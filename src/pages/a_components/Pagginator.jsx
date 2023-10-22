import React from "react";
import GoBackSVG from "../../static/svg/IconBackward.svg";
import GoForwSVG from "../../static/svg/IconForward.svg";

function Pagginator() {
  return (
    <nav className=" flex gap-[2px] mt-[20px]">
      <button className=" flex items-center gap-[20px] px-[20px] text-[#4C4C4042]">
        <img src={GoBackSVG} alt="" />
        Назад
      </button>
      <div className="w-[48px] h-[48px] bg-[#00426912] text-[#4C4C40CC] flex justify-center items-center">1</div>
      <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">2</div>
      <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">3</div>
      <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">4</div>
      <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">5</div>
      <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">...</div>
      <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">50</div>

      <button className=" flex items-center gap-[20px] px-[20px] text-[#4C4C40CC]">
        Вперед
        <img src={GoForwSVG} alt="" />
      </button>
    </nav>
  );
}

export default Pagginator;
