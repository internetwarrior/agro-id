import React from "react";
import User from "./components/User";
import Title from "../a_components/Title";
import TitleSVG from "../../static/svg/IconLineAndBarChart.svg";

function Users() {
  return (
    <>
      <main className=" w-full min-h-[100vh] flex justify-center bg-[#FAF8F6]">
        <div className="  w-full  mb-[200px] flex items-center flex-col max-w-[1600px] gap-[32px] ">
          <Title img={TitleSVG} title={"Участники"} />
          <div className="grid grid-cols-6 gap-[24px]">
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
          </div>
        </div>
      </main>
    </>
  );
}

export default Users;
