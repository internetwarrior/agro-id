import React from "react";

import Title from "../a_components/Title";
import titleSVG from "../../static/svg/IconLineAndBarChart.svg";
import PostContent from "../a_components/PostContent";
import Post_bg from "../../static/images/event_bg.png";

import GoBackSVG from "../../static/svg/IconBackward.svg";
import GoForwSVG from "../../static/svg/IconForward.svg";

import SecondCard from "../a_components/SecondCard";
import { Outlet } from "react-router-dom";

function Events() {
  return (
    <main className=" w-full min-h-[100vh] flex justify-center bg-[#FAF8F6]">
      <Outlet />
      <div className="  w-full  mb-[200px] flex items-center flex-col max-w-[1600px] gap-[28px]">
        <Title img={titleSVG} title="Мероприятия" />
        <PostContent
          title={"Мероприятия"}
          content="Организуйте встречу, конференцию, выставку, вебинар, опрос или любое другое событие в офлайн или онлайн формате. Охватите целевую аудиторию и удобно проинформируйте ее о своем мероприятии"
          buttonTitle={"Создать Мероприятие"}
          img={Post_bg}
        />
        <div className=" text-[#2B361E] text-[24px] w-full font-bold">
          Все Мероприятия
        </div>

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
        <nav className=" flex gap-[2px] mt-[20px]">
          <button className=" flex items-center gap-[20px] px-[20px] text-[#4C4C4042]">
            <img src={GoBackSVG} alt="" />
            Назад
          </button>
          <div className="w-[48px] h-[48px] bg-[#00426912] text-[#4C4C40CC] flex justify-center items-center">
            1
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            2
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            3
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            4
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            5
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            ...
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            50
          </div>

          <button className=" flex items-center gap-[20px] px-[20px] text-[#4C4C40CC]">
            Вперед
            <img src={GoForwSVG} alt="" />
          </button>
        </nav>
      </div>
    </main>
  );
}

export default Events;
