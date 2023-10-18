import React, { useState } from "react";
import User from "./components/User";
import Title from "../a_components/Title";
import TitleSVG from "../../static/svg/userIcon.svg";
import SelectApp from "../d_main/components/Select";
import { InputSearch } from "../a_components/Input";

function Users() {
  const [first, setSelected] = useState("key1");
  const [second, secondsetSelected] = useState("key1");
  const [third, thirdsetSelected] = useState("key1");

  const dataObject = {
    key1: "Интересы",
    key2: "String 2",
    key3: "String 3",
  };
  const dataObject2 = {
    key1: "Город",
    key2: "String 2",
    key3: "String 3",
  };
  const dataObject3 = {
    key1: "Должность",
    key2: "String 2",
    key3: "String 3",
  };
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  const secondhandleChange = (event) => {
    secondsetSelected(event.target.value);
  };
  const thirdhandleChange = (event) => {
    thirdsetSelected(event.target.value);
  };
  return (
    <>
      <main className=" w-full min-h-[100vh] flex justify-center bg-[#FAF8F6]">
        <div className="  w-full  mb-[200px] flex items-center flex-col max-w-[1600px] gap-[32px] ">

          <div className="flex items-center	 w-full ">
              <Title img={TitleSVG} title={"Участники"} />
          <div className="w-full">
          <InputSearch placeholder={"ФИО, отрасль, должность, компания"} />

          </div>
          </div>

          <div className="flex gap-3 items-start">
            <SelectApp
              onChange={handleChange}
              title={first}
              dataObject={dataObject}
              id={1}
            />
            <SelectApp
              onChange={secondhandleChange}
              title={second}
              dataObject={dataObject2}
              id={2}
            />
            <SelectApp
              onChange={thirdhandleChange}
              title={third}
              dataObject={dataObject3}
              id={3}
            />
          </div>

          <div className="grid grid-cols-6 gap-[24px]">
            {/* <div > */}
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
            {/* </div> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default Users;
