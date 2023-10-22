import React from "react";

import Title from "../a_components/Title";
import titleSVG from "../../static/svg/Vector (4).svg";

import PostContent from "../a_components/PostContent";
import Post_bg from "../../static/images/event_bg.png";

import SecondCard from "../a_components/SecondCard";
import { Link, Outlet } from "react-router-dom";
import world from "../../static/svg/IconWorldFilled.svg";
import sunIcon from "../../static/svg/sunIcon.svg";
import join from "../../static/svg/joinsvg.svg";
import { InputSearch } from "../a_components/Input";
import SliceWrapper from "../a_components/wrappers/SliceWrapper";
import Pagginator from "../a_components/Pagginator";

function Events() {
  return (
    <>
      <Outlet />
      <SliceWrapper>
        <Title img={titleSVG} title="Мероприятия" />
      </SliceWrapper>

      <SliceWrapper>
        <PostContent
          title={"Мероприятия"}
          content="Организуйте встречу, конференцию, выставку, вебинар, опрос или любое другое событие в офлайн или онлайн формате. Охватите целевую аудиторию и удобно проинформируйте ее о своем мероприятии"
          buttonTitle={"Создать Мероприятие"}
          img={Post_bg}
        />
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
        <div className="grid grid-cols-4 gap-[24px]">
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
