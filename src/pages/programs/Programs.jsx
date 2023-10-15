import React from "react";
import Title from "../a_components/Title";
import TitleSVG from "../../static/svg/IconLineAndBarChart.svg";
import Add from "../../static/svg/IconDocAdd.svg";
import Company from "./components/Company";
import Button from "../a_components/Button";
import { Link, Outlet } from "react-router-dom";

function Programs() {
  return (
    <main className=" w-full min-h-[100vh] flex justify-center bg-[#FAF8F6]">
      <Outlet />
      <div className="  w-full  mb-[200px] flex items-center flex-col max-w-[1600px] gap-[32px] ">
        <div className="w-full flex justify-between items-start">
          <Title img={TitleSVG} title={"Участники"} />
          <div className="flex flex-col pt-[56px] gap-[30px]">
            <div className=" text-[#2B361E] font-medium">
              Здесь собраны сервисы и площадки отрасли, интегрированные с
              Agro-ID. Вы можете быстро и просто подключиться к интересующим Вас
              ресурсам. Также Вы можете разместить заявку на интеграцию с Вашей
              платформой.
            </div>
            <div className=" flex justify-end">
              <Button
                imgInclude={true}
                img={Add}
                title={"Заявка на интеграцию"}
              >
                hello
              </Button>
              <Link to={"create-edit/program"}>Заявка на интеграцию</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-[32px] w-full">
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
    </main>
  );
}

export default Programs;
