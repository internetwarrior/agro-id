import React, { useState } from "react";
import Title from "../a_components/Title";
import titleSVG from "../../static/svg/IconBook.svg";
import PublicCard from "./components/PublicCard";
import GoBackSVG from "../../static/svg/IconBackward.svg";
import GoForwSVG from "../../static/svg/IconForward.svg";
import { NavLink, Outlet } from "react-router-dom";
import world from "../../static/svg/IconWorldFilled.svg";
import sunIcon from "../../static/svg/sunIcon.svg";

import Selector, { Option } from "../a_components/AgroIDSelector";
import CHECK_SVG from "../../static/svg/selector/duinausar.svg";
import GridWrapper from "../a_components/wrappers/GridWrapper";
import Banner_2 from "../a_components/Banner_2";
import SliceWrapper from "../a_components/wrappers/SliceWrapper";
import Pagginator, { Page } from "../a_components/Pagginator";

function Post() {
  const russianCities = ["Москва", "Бишкек", "Петербург", "Новосибирск", "Екатеринбург", "Красноярск", "Казань"];
  const topJavaScriptJobs = [
    "Frontend Developer",
    "Full Stack Developer",
    "Back-End Developer",
    "JavaScript Engineer",
    "Web Developer",
    "UI/UX Developer",
    "Node.js Developer",
    "React Developer",
  ];

  return (
    <>
      <Outlet />

      <SliceWrapper>
        <Title img={titleSVG} title="Публикации" />
      </SliceWrapper>

      <SliceWrapper>
        <Banner_2 />
      </SliceWrapper>

      <SliceWrapper>
        <div className="flex   gap-3 	border-b-4  w-full 	">
          <div className="flex gap-1  	">
            <img src={world} alt="" />
            <NavLink className="   p-3 border-b-3 border-solid border-gray-300 text-[#00203399] active:text-black active:border-b-black">
              Все
            </NavLink>
          </div>
          <div className="flex gap-1">
            <img src={sunIcon} alt="" />
            <NavLink className="   p-3 border-b-3 border-solid border-gray-300 text-[#00203399] active:text-black active:border-black">
              {" "}
              Мои публикации
            </NavLink>{" "}
          </div>
        </div>
      </SliceWrapper>
      <SliceWrapper>
        <div className="flex justify-between w-full ">
          <Title text={"Все публикации"} search={true} textSearch={"Поиск по публикациям"} />
        </div>
      </SliceWrapper>
      <SliceWrapper>
        <div className="flex w-full justify-between">
          <div className="flex gap-3 items-start">
            <Selector
              placeHolder={"Город"}
              onChange={(data) => {
                return;
              }}
            >
              {russianCities.map((val, ind) => (
                <Option icon={CHECK_SVG} value={ind % 2 === 0} index={ind} text={val} />
              ))}
            </Selector>{" "}
            <Selector
              placeHolder={"Должность"}
              onChange={(data) => {
                return;
              }}
            >
              {topJavaScriptJobs.map((val, ind) => (
                <Option value={ind % 2 === 0} index={ind} text={val} />
              ))}
            </Selector>{" "}
          </div>
          <div className="flex gap-6 items-center">
            <select className="border-l-0 border-r-0 focus:outline-none" name="" id="">
              <option value="">По актуальности</option>
              <option value="">По актуальности</option>
            </select>
            <span>hello</span>
          </div>
        </div>
      </SliceWrapper>
      <SliceWrapper>
        <GridWrapper className="grid grid-cols-4 gap-[24px]">
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
        </GridWrapper>
      </SliceWrapper>
      <SliceWrapper>
        <Pagginator pages={56} />
      </SliceWrapper>
    </>
  );
}

export default Post;
