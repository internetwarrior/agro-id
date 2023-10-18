import React from "react";

import Title from "../a_components/Title";
import titleSVG from "../../static/svg/Vector (4).svg";

import PostContent from "../a_components/PostContent";
import Post_bg from "../../static/images/event_bg.png";
import GoBackSVG from "../../static/svg/IconBackward.svg";
import GoForwSVG from "../../static/svg/IconForward.svg";

import SecondCard from "../a_components/SecondCard";
import { Link, Outlet } from "react-router-dom";
import world from "../../static/svg/IconWorldFilled.svg";
import sunIcon from "../../static/svg/sunIcon.svg";
import search from "../../static/svg/search.svg";

import scss from "../post/Post.module.scss";

function Events() {
  return (
    <main className=" w-full min-h-[100vh] flex justify-center bg-[#FAF8F6]">
      <Outlet />
      <div className="  w-full  mb-[200px] flex items-center flex-col max-w-[1600px] gap-[28px]">
        <Title img={titleSVG} title="Мероприятия" />
        <PostContent
          className={scss.secondBanner}
          title={"Мероприятия"}
          content="Организуйте встречу, конференцию, выставку, вебинар, опрос или любое другое событие в офлайн или онлайн формате. Охватите целевую аудиторию и удобно проинформируйте ее о своем мероприятии"
          buttonTitle={"Создать Мероприятие"}
          img={Post_bg}
        />

        <div className="flex   gap-3 	border-b-4  w-full 	">
          <div className="flex gap-1  	">
            <img src={world} alt="" />
            <Link className="   p-3 border-b-3 border-solid border-gray-300 text-[#00203399] active:text-black active:border-b-black">
              Все
            </Link>
          </div>
          <div className="flex gap-1">
            <img src={sunIcon} alt="" />
            <Link className="   p-3 border-b-3 border-solid border-gray-300 text-[#00203399] active:text-black active:border-black">
              Мои публикации
            </Link>
          </div>
        </div>

        <div className="flex justify-between w-full ">
          <div className=" w-full text-[#2B361E] text-[24px]  font-bold">
            Все Мероприятия
          </div>
          <div className={scss.inputContainer}>
            <img src={search} alt="" />
            <input
              className={scss.input}
              type="text"
              placeholder="Поиск по публикациям"
              name=""
              id=""
            />
          </div>
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
