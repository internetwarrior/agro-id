import React, { useState } from "react";
import User from "./components/User";
import Title from "../a_components/Title";
import TitleSVG from "../../static/svg/userIcon.svg";
import CHECK_SVG from "../../static/svg/selector/duinausar.svg";
import Selector, { Option } from "../a_components/AgroIDSelector";

function Users() {
  const [first, setSelected] = useState("key1");
  const [second, secondsetSelected] = useState("key1");
  const [third, thirdsetSelected] = useState("key1");
  const [five, fiveHandle] = useState("key1");

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

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  const secondhandleChange = (event) => {
    secondsetSelected(event.target.value);
  };
  const thirdhandleChange = (event) => {
    thirdsetSelected(event.target.value);
  };
  const fifthhandleChange = (event) => {
    fiveHandle(event.target.value);
  };
  return (
    <>
      <main className=" w-full min-h-[100vh] flex justify-center bg-[#FAF8F6]">
        <div className="  w-full  mb-[200px] flex items-center flex-col max-w-[1600px] gap-[32px] ">
          <div className="flex items-center	 w-full ">
            <Title search={true} textSearch={"ФИО, отрасль, должность, компания"} img={TitleSVG} title={"Участники"} />
          </div>

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
              <div className=" text-[#2B361E]">55 896 участников</div>
            </div>
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
