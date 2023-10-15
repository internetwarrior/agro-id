import React from "react";
import Dummy_bg from "../../../static/draft/org_bg.png";
import DownloadSVG from "../../../static/svg/download2.svg";
import Star from "../../../static/svg/star2.svg";

function Organization() {
  return (
    <div className=" w-full p-[24px] relative rounded-[8px]  overflow-hidden shadow-xl flex flex-col gap-[24px]">
      <div className="flex  gap-[30px]">
        <div className="text-[24px] font-semibold  flex-shrink text-[#2B361E] flex items-center gap-[10px]">
          <div className=" h-[10px] bg-[#22C38E] rounded-full"></div>
          Сельхозартель Колхоз «Радуга»
        </div>
        <div>
          <button
            type="button"
            className=" text-[#4C4C40CC] flex gap-[8px] items-center bg-[#FBF6EB] pl-[12px] pr-[8px] rounded-[4px] text-[12px] py-[4px]"
          >
            Реквизиты
            <img src={DownloadSVG} alt="" srcSet="" />
          </button>
        </div>
        <div className="flex items-center text-[#4C4C40CC] bg-[#FBF6EB] gap-[4px] py-[5.5px] px-[8px] rounded-full outline outline-[#AE8E49] font-medium">
          <img src={Star} alt="" />
          1,4
        </div>
      </div>
      <div className=" flex items-start justify-between">
        <div className="flex flex-col items-start">
          <div className=" text-[#195B3F] font-medium uppercase text-[12px]">
            Инн
          </div>
          <div className=" text-[#2B361E] ">0107003220</div>
        </div>
        <div className="flex flex-col items-start">
          <div className=" text-[#195B3F] font-medium uppercase text-[12px]">
            дата регистрации
          </div>
          <div className=" text-[#2B361E] ">23.08.2002</div>
        </div>
        <div className="flex flex-col items-start">
          <div className=" text-[#195B3F] font-medium uppercase text-[12px]">
            ОГРН
          </div>
          <div className=" text-[#2B361E] ">1020100507074</div>
        </div>
        <div className="flex flex-col items-start">
          <div className=" text-[#195B3F] font-medium uppercase text-[12px]">
            КПП
          </div>
          <div className=" text-[#2B361E] ">0101004604</div>
        </div>
        <div className="flex flex-col items-start">
          <div className=" text-[#195B3F] font-medium uppercase text-[12px]">
            оквэд
          </div>
          <div className=" text-[#2B361E] font-semibold underline">01.4</div>
        </div>
      </div>

      <div className=" absolute top-0 left-0 w-full h-full -z-10 bg-[#D2EAD0]">
        {/* <img
          className=" w-full h-full blur-sm object-cover"
          src={Dummy_bg}
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Organization;
