import React from "react";
import Title from "../a_components/Title";
import TitleSVG from "../../static/svg/bagsvg.svg";
import Organization from "./components/Organization";
import { Outlet } from "react-router-dom";
import { Input } from "@mui/material";
import { InputSearch } from "../a_components/Input";

function Organizations() {
  return (
    <main className=" w-full min-h-[100vh] flex justify-center bg-[#FAF8F6]">
      <Outlet />
      <div className="  w-full  mb-[200px] flex items-center flex-col max-w-[1600px] gap-[32px] px-[20px] 2xl:px-0 ">
        <div className="flex justify-between items-center	 w-full ">
      
            <Title img={TitleSVG} title={"Организации"} />
          <div className="w-full">
          <InputSearch  placeholder={"Название, ИНН, ОГРН, год создания"} />

          </div>
        
        </div>

        <div className="grid grid-cols-1  xl:grid-cols-2 gap-[32px] w-full ">
          <Organization />
          <Organization />
          <Organization />
          <Organization />
        </div>
      </div>
    </main>
  );
}

export default Organizations;
