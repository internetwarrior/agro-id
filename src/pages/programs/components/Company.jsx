import React from "react";
import CompanyIMG from "../../../static/draft/com_img.png";

function Company() {
  return (
    <div className=" shadow-xl w-full p-[32px] text-[#2B361E] text-center flex flex-col gap-[20px] bg-[#EAF0E4] rounded-[8px]">
      <img className=" mt-[12px]" src={CompanyIMG} alt="" />
      <div>Учет и оптимизация ельскохозяйственных грузов</div>
      <button className=" mb-[12px] h-[40px] w-full rounded-[4px] px-[20px] text-[#334746] outline outline-[#4C4C40] outline-[1px]">
        Подключить
      </button>
    </div>
  );
}

export default Company;
