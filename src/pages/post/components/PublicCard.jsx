import React from "react";
import Image from "../../../static/draft/dummyImage.jpg";
import { Link } from "react-router-dom";

function PublicCard(props) {
  return (
    <Link
      to={props?.link}
      className="  min-w-[380px] xl:min-w-[0] px-[24px] pt-[24px] pb-[24px] flex flex-col h-[372px] shadow-md rounded-[8px] gap-[12px] bg-white"
    >
      <div className=" relative h-full max-h-[174px] rounded-[8px] overflow-hidden">
        <img src={Image} className=" w-full h-full" alt="" />
      </div>
      <div className=" flex justify-between">
        <button className="px-[12px] py-[9px] text-[12px] category-tag text-[#4C4C40]">
          Дзен
        </button>
        <div className=" text-[12px] text-[#2B361E]">24 июля 2023 г.</div>
      </div>
      <h4 className=" font-medium text-[20px] text-[#2B361E] ">
        «Небесная Цивилизация» — лекция Дмитрия Пескова #Архипелаг2023
      </h4>
    </Link>
  );
}

export default PublicCard;
