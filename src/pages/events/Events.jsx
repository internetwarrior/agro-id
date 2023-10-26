import React from "react";

import Title from "../a_components/Title";
import titleSVG from "../../static/svg/Vector (4).svg";

import Post_bg from "../../static/images/event_bg.png";

import SecondCard from "../a_components/SecondCard";
import { Link, Outlet } from "react-router-dom";
import world from "../../static/svg/IconWorldFilled.svg";
import sunIcon from "../../static/svg/sunIcon.svg";
import join from "../../static/svg/joinsvg.svg";
import { InputSearch } from "../a_components/Input";
import SliceWrapper from "../a_components/wrappers/SliceWrapper";
import Pagginator from "../a_components/Pagginator";
import GridWrapper from "../a_components/wrappers/GridWrapper";
import Banner_2 from "../a_components/Banner_2";

function Events() {
  return (
    <>
      <Outlet />
      <SliceWrapper>
        <Title img={titleSVG} title="Мероприятия" />
      </SliceWrapper>

      <SliceWrapper>
        <Banner_2 />
      </SliceWrapper>

      <SliceWrapper>
        <div className="flex   gap-3 	border-b-4  w-full 	">
          <div className="flex gap-1  	">
            <img src={world} alt="" />
            <Link className="   p-3 border-b-3 border-solid border-gray-300 text-[#00203399] active:text-black active:border-b-black">
              Все
            </Link>
          </div>
          <div className="flex gap-1">
            <img src={join} alt="" />
            <Link className="   p-3 border-b-3 border-solid border-gray-300 text-[#00203399] active:text-black active:border-black">
              Я участвую
            </Link>
          </div>
          <div className="flex gap-1">
            <img src={sunIcon} alt="" />
            <Link className="   p-3 border-b-3 border-solid border-gray-300 text-[#00203399] active:text-black active:border-black">
              Мои публикации
            </Link>
          </div>
        </div>
      </SliceWrapper>

      <SliceWrapper>
        <Title text={"Все Мероприятия"} search={true} textSearch={"Поиск по мероприятиям"} />
      </SliceWrapper>

      <SliceWrapper>
        <div
          className="grid 
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        
         gap-[24px]"
        >
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
        </div>
      </SliceWrapper>

      <SliceWrapper className={" flex justify-center"}>
        <Pagginator />
      </SliceWrapper>
    </>
  );
}

export default Events;
