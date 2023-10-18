import React from "react";
import Image from "../../static/draft/dummyImage.jpg";
import Time_mini from "../../static/svg/time_mini.svg";
import Register_mini from "../../static/svg/register_mini.svg";
import TimeIcon from "../../static/svg/time.svg";
import PlaceIcon from "../../static/svg/place.svg";

function SecondCard() {
  return (
    <div className="   flex min-w-[380px] xl:min-w-[0] w px-[24px] pt-[24px] pb-[24px]  flex-col h-[372px] shadow-md rounded-[8px] gap-[12px] bg-white">
      <div className=" relative h-full max-h-[174px] rounded-[8px] overflow-hidden">
        <img src={Image} className=" w-full h-full object-cover" alt="" />
        <div className=" absolute top-0 left-0 w-full flex justify-between p-[16px]">
          <div className="p-[4px] bg-slate-200	 rounded-[8px] text-[#4C4C40]] text-[12px] gap-[4px] flex items-center">
            <img src={Time_mini} className="" alt="" />
            еще 6 дней
          </div>
          <div className="py-[4px] px-[8px] reg-tag rounded-[8px] text-[#4C4C40] text-[12px] gap-[4px] flex">
            <img src={Register_mini} className="" alt="" />
            Регистрация
          </div>
        </div>
      </div>
      <div>
        <button className="px-[12px] py-[9px] text-[12px] category-tag text-[#4C4C40]">
          Лекция
        </button>
      </div>
      <h4 className=" font-semibold text-[#2B361E] text-base">
        «Небесная Цивилизация» — лекция Дмитрия Пескова #Архипелаг2023
      </h4>
      <div className="flex ">
        <div className="flex items-center flex-grow text-[12px] text-[#4C4C40]">
          <img src={TimeIcon} alt="" className="pr-[8px]" />
          <div>8-августа</div>
        </div>
        <div className="flex items-center  text-[12px] text-[#4C4C40]">
          <img src={PlaceIcon} alt="" className="pr-[8px]" />
          <div>Москва</div>
        </div>
      </div>
    </div>
  );
}

export default SecondCard;
