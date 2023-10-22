import React, { useState } from "react";
import Page_1 from "./Page_1";
import Banner from "./Banner";
import Button from "../a_components/Button";
import Arrow from "../../static/svg/leftArrow.svg";
import Page_2 from "./Page_2";
import Tag from "../a_components/Tag";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const userInterestsTags = [
    "Web-разработка",
    "Front-end разработка",
    "Back-end разработка",
    "Full-stack разработка",
    "React.js",
    "Angular",
    "Vue.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Разработка мобильных приложений",
    "Искусственный интеллект",
    "Машинное обучение",
    "Игровая разработка",
    "Data Science",
    "DevOps",
    "Системное администрирование",
    "UI/UX дизайн",
    "Интернет вещей (IoT)",
    "Блокчейн",
    "Кибербезопасность",
    "Системы управления версиями (Git)",
    "Сетевая разработка",
    "Электронная коммерция",
    "Социальные сети",
    "Сайтопроектирование",
  ];

  const [activePage, setActivePage] = useState(1);
  const next_page = () => {
    window.scrollTo(0, 0);
    setActivePage((prev) => (prev += 1));
  };
  const prev_page = () => {
    window.scrollTo(0, 0);
    setActivePage((prev) => (prev -= 1));
  };

  const navigate = useNavigate();
  function handleClick() {
    window.scrollTo(0, 0);
    navigate("/profile");
  }

  const pageTitles = ["Основные данные", "Дополнительные данные", "Укажите, пожалуйста, сферу Ваших интересов"];

  return (
    <>
      <div className=" my-0 sm:my-[20px] md:my-[40px] max-w-[1280px]  grid grid-cols-1 xl:grid-cols-2 gap-[25px] ">
        <Banner />
        <div className=" bg-[#FAF8F6] py-[60px] px-0 mx-0 sm:mx-[20px] xl:mx-0 sm:px-[40px] rounded-[8px] shadow-xl flex items-center justify-center">
          <form className="smooth-animation= flex flex-col items-center gap-[36px] max-w-[470px] w-full">
            <div className=" text-[32px] text-[#334746] font-semibold text-center">{pageTitles[activePage - 1]}</div>

            {activePage > 1 && (
              <button type="button" onClick={prev_page} className=" text-base  flex items-center p-[10px]">
                <img src={Arrow} className="pr-[14px]" />
                {pageTitles[activePage - 2]}
              </button>
            )}

            {activePage == 1 && <Page_1 />}
            {activePage == 2 && <Page_2 />}
            {activePage == 3 && (
              <>
                <div className="max-w-[592px] flex flex-wrap justify-center gap-[8px]">
                  {userInterestsTags.map((val, ind) => {
                    return <Tag active={ind % 2} text={val} />;
                  })}
                </div>
              </>
            )}
            {activePage == 1 && (
              <>
                <div className=" flex  items-center gap-[12px] text-[#2B361E]">
                  <input className="  w-[20px] h-[20px]" type="checkbox" name="" id="id_1" />
                  <label htmlFor="id_1">
                    Я согласен с{" "}
                    <Link to={"/"} className=" underline text-[#196343]">
                      Пользовательским соглашением
                    </Link>{" "}
                    и{" "}
                    <Link to={"/"} className=" underline text-[#196343]">
                      Политикой обработки персональных данных
                    </Link>
                  </label>
                </div>
                <div className=" flex  items-center gap-[12px] text-[#2B361E]">
                  <input className="  w-[20px] h-[20px]" type="checkbox" name="" id="id_2" />
                  <label htmlFor="id_2">
                    Я согласен на обработку персональных данных, разрешенных субъектом персональных данных для распространения
                  </label>
                </div>
              </>
            )}

            {activePage < 3 && <Button class={" w-full"} title={"Продолжить"} func={next_page} />}
            {activePage == 3 && <Button class={" w-full"} title={"Зарегистрироваться"} func={handleClick} />}
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
