import React from "react";
import logo from "../../../static/selectIcons/Logoorg.svg";
import Star from "../../../static/svg/star2.svg";
import checkmark from "../../../static/svg/checkMark.svg";
import dmn from "../../../static/svg/diamond.svg";
import q from "../../../static/selectIcons/voprossvg.svg";
import arrow from "../../../static/svg/arrowDownm.svg";
import { Requisites } from "./Requisites";
import { InputSearch } from "../../a_components/Input";
import { Activities } from "./Activities";

export const DataOrganization = () => {
  return (
    <>
      <div className="flex p-[30px] items-center	 w-full ">
        <p className="w-full">назад</p>
        <div className="w-full">
          <InputSearch placeholder={"Название, ИНН, ОГРН, год создания"} />
        </div>
      </div>
      <div className="p-[50px]  relative  w-full flex flex-col  gap-[28px] shadow-xl rounded-[8px]">
        <div className="flex justify-around  ">
          <div className="flex flex-col gap-6  ">
            {/* <div className="w-[50%]"> */}
            <div className="flex items-center gap-8">
              <div>
                <img src={logo} alt="" />
              </div>

              <h1 className=" text-[24px] md:text-[32px] text-[#2B361E] font-bold">
                ЗАО «Молкомбинат «Адыгейский»
              </h1>
            </div>
            {/* </div> */}

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <img src={checkmark} alt="" />
                <p className="text-[#1C754F]"> действующая организация</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={dmn} alt="" />
                <p className="text-[#1C754F]">Организация подтверждена</p>
              </div>
              <div className="flex items-center text-[#4C4C40CC] bg-[#FBF6EB] gap-[4px] py-[5.5px] px-[8px] rounded-full outline outline-[#AE8E49] font-medium">
                <img src={Star} alt="" />
                4,9 <img src={q} alt="" />
              </div>
            </div>

            <div className="">
              <p className="text-[#00203399]">
                Основной ОКВЭД <p className="text-[#1C754F] font-bold">10.51</p>{" "}
                — Производство молока (кроме сырого) и молочной продукции{" "}
              </p>
            </div>

            <div className="flex gap-6">
              <span className="text-[#1C754F] font-bold underline">
                adig.milk.рф
              </span>
              <span className="text-[#1C754F] font-bold underline">
                +7 (756) 855-66-77
              </span>
              <span className="text-[#1C754F] font-bold underline">
                info@adig.milk
              </span>
            </div>
            <div className="flex">
              <div>
                <button className=" px-[12px] py-[9px] event-tag text-[12px] text-[#4C4C40] lowercase mr-[8px] mb-[8px] rounded-[4px] gap-[8px] flex items-center justify-center">
                  Реквизиты
                  <img src={arrow} alt="" srcSet="" />
                </button>
              </div>

              <div className="flex w-full">
                <button className=" px-[12px] py-[9px] event-tag text-[12px] text-[#4C4C40] lowercase mr-[8px] mb-[8px] rounded-[4px] gap-[8px] flex items-center justify-center">
                  Презентация
                  <img src={arrow} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-10 flex flex-col gap-y-12	">
            <div className="flex gap-20">
              <div>
                <p className="text-[#1C754F]">ИНН</p>
                <span className="font-bold">0107003220</span>
              </div>
              <div>
                <p className="text-[#1C754F]">Дата регистрации</p>
                <span className="font-bold">0107003220</span>
              </div>
            </div>

            <div className="flex gap-20">
              <div>
                <div className="flex gap-1">
                  <p className="text-[#1C754F]">ИНН</p>
                  <img src={q} alt="" />
                </div>

                <span className="font-bold">0107003220</span>
              </div>

              <div>
                <div className="flex gap-1">
                  <p className="text-[#1C754F]">ИНН</p>
                  <img src={q} alt="" />
                </div>

                <span className="font-bold">0107003220</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Requisites />
      <Activities />
    </>
  );
};
