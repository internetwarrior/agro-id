import React from "react";
import Title from "../a_components/Title";
import TitleSVG from "../../static/svg/flag.svg";
import Company from "./components/Company";
import { Outlet } from "react-router-dom";
import GridWrapper from "../a_components/wrappers/GridWrapper";
import Banner_2 from "../a_components/Banner_2";
import SliceWrapper from "../a_components/wrappers/SliceWrapper";

function Programs() {
  return (
    <>
      <Outlet />
      <SliceWrapper className="  flex items-center flex-col gap-[32px] ">
        <Title img={TitleSVG} title={"Навигатор программ"} />
        <Banner_2 />
      </SliceWrapper>

      <SliceWrapper className="  w-full  mb-[200px] flex items-center flex-col max-w-[1280px] px-[28px] gap-[32px] ">
        <GridWrapper>
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
        </GridWrapper>
      </SliceWrapper>
    </>
  );
}

export default Programs;
