import React, { useRef, useState } from "react";
import Page_1 from "./Page_1";
import Banner from "./Banner";
import Button from "../a_components/Button";
import Arrow from "../../static/svg/leftArrow.svg";
import Page_2 from "./Page_2";
import { Link, useNavigate } from "react-router-dom";
import { TagList, Tag } from "../a_components/AgroIDTags";

function Register() {
  //HOOKS
  const navigate = useNavigate();

  // ----------CHANGING PAGES------------
  const [step, setStep] = useState(1);

  const next_page = () => {
    window.scrollTo(0, 0);
    setStep((prev) => (prev += 1));
  };

  const prev_page = () => {
    window.scrollTo(0, 0);
    setStep((prev) => (prev -= 1));
  };

  // ----------TAG MONIPULATION------------
  const toggle_tag = (id) => {
    setTags((prev) =>
      prev.map((tag) => {
        if (tag.id === id) {
          tag.value = !tag.value;
          return tag;
        } else {
          return tag;
        }
      }),
    );
  };

  const get_all_tags = () => {
    return tags.filter((tag) => tag.value !== false);
  };

  const [tags, setTags] = useState(userInterestsTags);

  const pageTitles = ["Основные данные", "Дополнительные данные", "Укажите, пожалуйста, сферу Ваших интересов"];
  //-----------COLLECTING DATA-----------
  const formRef = useRef(null);
  const [formData, setFormData] = useState([]);

  const collect_data = () => {
    const collectedData = get_all_tags();
    const theForm = Object.fromEntries(new FormData(formRef.current));
    return { ...theForm, ...{ interests: collectedData } };
  };

  // ----------SUBMITING DATA------------

  function sumbit_form() {
    // window.scrollTo(0, 0);
    // navigate("/profile");
    try {
      console.log(get_all_tags());
      console.log(collect_data());
    } catch (err) {
      console.log(err);
    }
  }
  //---------------------------------------REACT COMPONENTS----------------------------------------->>>>>>>>>>>>>>>>>>>>>>
  return (
    <>
      <div className=" my-0 sm:my-[20px] md:my-[40px] max-w-[1280px]  grid grid-cols-1 xl:grid-cols-2 gap-[25px] ">
        <Banner />
        <div className=" bg-[#FAF8F6] p-[32px] rounded-[8px] shadow-xl flex items-center justify-center">
          <form ref={formRef} className="smooth-animation= flex flex-col items-center gap-[18px] max-w-[470px] w-full">
            <div className=" text-[32px] text-[#334746] font-semibold text-center">{pageTitles[step - 1]}</div>

            {step > 1 && (
              <button type="button" onClick={prev_page} className=" text-base  flex items-center p-[10px]">
                <img src={Arrow} className="pr-[14px]" />
                {pageTitles[step - 2]}
              </button>
            )}

            <Page_1 visible={step} />
            <Page_2 visible={step} />
            {step == 3 && (
              <>
                <TagList>
                  {tags.map((tag) => {
                    return <Tag name={tag.name} value={tag.value} id={tag.id} onClick={toggle_tag} />;
                  })}
                </TagList>
              </>
            )}

            {step == 1 && <Agreement />}

            {step < 3 && <Button class={" w-full"} title={"Продолжить"} func={next_page} />}
            {step == 3 && <Button class={" w-full"} title={"Зарегистрироваться"} func={sumbit_form} />}
          </form>
        </div>
      </div>
    </>
  );
}

const Agreement = () => {
  return (
    <>
      <div className=" flex  items-center gap-[12px] text-[#2B361E]">
        <input className="  w-[20px] h-[20px]" type="checkbox" name="" id="id_1" />
        <label className=" text-[14px]" htmlFor="id_1">
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
        <label htmlFor="id_2" className="text-[14px]">
          Я согласен на обработку персональных данных, разрешенных субъектом персональных данных для распространения
        </label>
      </div>
    </>
  );
};

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
].map((tag, index) => {
  return { name: tag, id: index, value: false };
});

export default Register;
