import React from "react";
import Title from "../a_components/Title";
import TitleSVG from "../../static/svg/flag.svg";
import Add from "../../static/svg/IconDocAdd.svg";
import Company from "./components/Company";
import Button from "../a_components/Button";
import { Link, Outlet } from "react-router-dom";
import PostContent from "../a_components/PostContent";
import scss from "../d_main/components/Main.module.scss";

function Programs() {
  return (
    <>
      <Outlet />
      <div className="  w-full  mb-[200px] flex items-center flex-col max-w-[1280px] px-[28px] gap-[32px] ">
        <Title img={TitleSVG} title={"Навигатор программ"} />

        <div className={scss.bg}>
          {/* <div className="w-full flex flex-col p-[44px] "> */}
          <div className="p-[44px] overflow-hidden relative w-full flex flex-col gap-[28px] shadow-xl rounded-[8px]">
            <div className=" text-[#2B361E] font-medium">
              Здесь собраны сервисы и площадки отрасли, интегрированные с Agro-ID. Вы можете быстро и просто подключиться к интересующим Вас
              ресурсам. Также Вы можете разместить заявку на интеграцию с Вашей платформой.
            </div>
            <div>
              <Link to={"create-edit/event"}>
                <Button imgInclude={true} img={Add} title={"Заявка на интеграцию"}></Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-[32px] w-full">
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
          <Company />
        </div>
      </div>
    </>
  );
}

export default Programs;
