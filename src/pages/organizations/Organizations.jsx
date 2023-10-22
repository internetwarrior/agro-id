import React from "react";
import Title from "../a_components/Title";
import TitleSVG from "../../static/svg/bagsvg.svg";
import Organization from "./components/Organization";
import { Outlet } from "react-router-dom";
import AccordionPart from "./Accordion";
import dmn from "../../static/svg/diamond.svg";
import SliceWrapper from "../a_components/wrappers/SliceWrapper";
function Organizations() {
  return (
    <>
      <Outlet />
      <SliceWrapper>
        <Title img={TitleSVG} title={"Организации"} search={true} textSearch={"Название, ИНН, ОГРН, год создания"} />
        <div className="w-full">
          <AccordionPart />
        </div>
      </SliceWrapper>

      <SliceWrapper>
        <div className="flex justify-start w-full gap-5 text-[#19634385]">
          <img src={dmn} alt="" />
          <p>Найдено 177 706 организаций с ОКВЭД 01.4</p>
        </div>
      </SliceWrapper>

      <SliceWrapper>
        <div className="grid grid-cols-1  xl:grid-cols-2 gap-[32px] w-full ">
          <Organization />
          <Organization />
          <Organization />
          <Organization />
        </div>
      </SliceWrapper>
    </>
  );
}

export default Organizations;
