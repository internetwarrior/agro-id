import React, { useEffect } from "react";
import EditSVG from "../../static/svg/exit_svg.svg";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PrivateRoutes from "../../settings/PrivateRoutes";
import Input from "./components/Input";
import Tag from "./components/Tag";
import Attatch from "../../static/svg/IconAttach.svg";
import Link_e from "./components/Link_e";
import Select from "./components/Select";

function CreateEdit(props) {
  const { reason } = useParams();
  const location = useLocation();

  const lastLocation = location.pathname.split("/").filter((path) => path !== reason && path !== "create-edit")[1];
  useEffect(() => console.log(lastLocation), []);
  const PAGES = {
    personal: { title: "Основное", component: <MainInformation /> },
    accomplishments: { title: "", component: <Accomplishments /> },
    education: { title: "Сертификат и дипломы", component: <Education /> },
    resume: { title: "Данные для резюме", component: <Resume /> },
    job: { title: "Работы", component: <Job /> },
  };

  return (
    <>
      <PrivateRoutes>
        <W_R_A_P_P_E_R>
          <div className=" flex justify-between items-start grid-full ">
            <h4 className=" text-[32px] text-[#334746] font-semibold">{PAGES[reason]["title"]}</h4>
            <Link to={lastLocation === undefined ? "/" : "/" + lastLocation}>
              <img src={EditSVG} alt="" />
            </Link>
          </div>

          {PAGES[reason].component}

          <div className="grid-full grid grid-cols-2 gap-[24px]">
            <Link_e link={"/"} />
            <input className="flex justify-center py-[12px] bg-[#AE8E49] text-white rounded-[4px]" value="Сохранить" type="submit" />
          </div>
        </W_R_A_P_P_E_R>
      </PrivateRoutes>
    </>
  );
}

const W_R_A_P_P_E_R = (props) => {
  const { children } = props;
  return (
    <>
      <div className="  fixed overflow-y-scroll w-full h-full  z-50 top-0 left-0 bg-black bg-opacity-30">
        <div className=" mt-[100px] mb-[100px] flex justify-center">
          <div className="py-[34px] px-[44px] w-full max-w-[1000px] bg-[#FAF8F6] rounded-[8px] grid grid-cols-2 gap-[24px]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default CreateEdit;

const som = () => {
  return (
    <>
      <label
        htmlFor="hello"
        className=" flex flex-col items-center outline-dashed outline-[2px] px-[60px] py-[19.5px] outline-[#00426947] rounded-[4px]"
      >
        <div className=" mb-[4px] text-[#00203399] text-[14px]">Перетащите файлы или нажмите кнопку</div>
        <div className=" text-[#0020334D] text-[12px]">Поддерживаемые форматы: JPG, PNG ДО 10 МБ</div>
        <button className=" mt-[12px] flex items-center gap-[12px] pr-[16px] pl-[12px] text-[#00395CCC] bg-[#00426912] rounded-[4px] py-[4px]">
          <img src={Attatch} alt="" />
          Загрузить файл
        </button>
      </label>
      <input className="hidden" id="hello" type="file" multiple />
      <input
        className="p-[13px] outline outline-[1px] outline-[#00426947] rounded-[8px]"
        type="date"
        placeholder="dd/mm/yyyy"
        name=""
        id=""
      />
      <select className="p-[13px] outline outline-[1px] outline-[#00426947] rounded-[8px]" value="0">
        <option className="p-[13px] outline outline-[1px]" value="0">
          Выберите категорию
        </option>
      </select>
      <div>
        <div className="flex items-center gap-[12px]">
          <input className=" w-[20px] h-[20px] " type="radio" name="company" id="radio1" />
          <label className="text-[18px] text-[#002033]" htmlFor="radio1">
            От моего имени
          </label>
        </div>
        <div className="flex items-center gap-[12px]">
          <input className=" w-[20px] h-[20px] " type="radio" name="company" id="radio2" />
          <label className="text-[18px] text-[#002033]" htmlFor="radio2">
            От имени компании
          </label>
        </div>
      </div>
      <textarea
        id="w3review"
        name="w3review"
        rows="4"
        cols="50"
        aria-setsize={"false"}
        className="outline outline-[1px] ouline-[#00426947] rounded-[4px]"
      ></textarea>
    </>
  );
};

const Accomplishments = () => {
  return (
    <>
      <Input label={"Учебное заведение"} name={"firstName"} placeholder={"Введите Фамилию"} type={"text"} />
      <Input label={"Вид обучения"} name={"firstName"} placeholder={"Введите имя"} type={"text"} />
      <Input label={"Название обучения"} name={"firstName"} placeholder={"Введите отчество"} type={"text"} />
      <Input label={"Период обучения"} name={"firstName"} placeholder={"Введите Дата рождения"} type={"text"} />
      <Input label={"Документы"} name={"firstName"} placeholder={"Введите Дата рождения"} type={"text"} />
      <div>+ Добавить место учебы</div>
    </>
  );
};

const Job = () => {
  return <div className="grid grid-cols-2 gap-[24px]">JOB</div>;
};

const Resume = () => {
  return (
    <div className="grid grid-cols-2 gap-[24px]">
      <Input label={"Желаемая должность"} name={"firstName"} placeholder={"Введите Фамилию"} type={"text"} />
      <Input label={"Квалификация"} name={"firstName"} placeholder={"Введите имя"} type={"text"} />
      <Input label={"Ожидаемая заработная плата (руб.)"} name={"firstName"} placeholder={"Введите отчество"} type={"text"} />
      <Input label={"Профессиональные навыки (255/255 символов) "} name={"firstName"} placeholder={"Введите Дата рождения"} type={"text"} />
      <div className=" grid-full">
        <div className=" text-[#00203399]">Интересы</div>
        <div>
          <Tag active={true} title={"Какой-то тег"} />
          <Tag title={"Мотоцикл"} />
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="grid grid-cols-2 gap-[24px]">
      <Input label={"Желаемая должность"} name={"firstName"} placeholder={"Введите Фамилию"} type={"text"} />
      <Input label={"Квалификация"} name={"firstName"} placeholder={"Введите имя"} type={"text"} />
      <Input label={"Ожидаемая заработная плата (руб.)"} name={"firstName"} placeholder={"Введите отчество"} type={"text"} />
      <Input label={"Профессиональные навыки (255/255 символов) "} name={"firstName"} placeholder={"Введите Дата рождения"} type={"text"} />
      <div className=" grid-full">
        <div className=" text-[#00203399]">Интересы</div>
        <div>
          <Tag active={true} title={"Какой-то тег"} />
          <Tag title={"Мотоцикл"} />
        </div>
      </div>
    </div>
  );
};

const MainInformation = () => {
  return (
    <>
      <Input label={"Фамилия"} name={"last_name"} placeholder={"Введите Фамилию"} type={"text"} />
      <Input label={"Имя"} name={"first_name"} placeholder={"Введите имя"} type={"text"} />
      <Input label={"Отчество"} name={"middle_name"} placeholder={"Введите отчество"} type={"text"} />
      <Input label={"Дата рождения"} name={"birth_date"} placeholder={"Введите Дата рождения"} type={"text"} />
      <Input label={"Телефон"} name={"phone_number"} placeholder={"Введите телефон"} type={"text"} />
      <Input label={"Эл. почта"} name={"email"} placeholder={"Введите эл.почта"} type={"email"} />

      <Select label={"Страна "} name={"country"} placeholder={"Введите страну"} type={"text"} />
      <Select label={"Город"} name={"city"} placeholder={"Введите Город"} type={"text"} />

      <Select label={"Отрасль деятельности"} name={"firstName"} placeholder={"Введите Отрасль деятельности"} type={"text"} />
      <Select label={"Профессиональная область"} name={"firstName"} placeholder={"Введите Профессиональная область"} type={"text"} />

      <div className=" w-full flex justify-between  grid-full">
        <div className=" text-[#00203399]">Компании</div>
        <div className=" flex gap-[10px]">
          <Tag text={"Hi!"} style={"yellow"} type={"div"} />
          <Tag text={"Hi!"} style={"yellow"} type={"div"} />
          <Tag text={"Hi!"} style={"yellow"} type={"div"} />
          <Tag text={"Hi!"} style={"yellow"} type={"div"} />
          <Tag text={"+ Добавить"} style={"yellow"} type={"button"} />
        </div>
      </div>

      <div className=" w-full flex justify-between grid-full ">
        <div className=" text-[#00203399]">Проекты</div>
        <div className=" flex gap-[10px]">
          <Tag text={"Hi!"} style={"red"} type={"div"} />
          <Tag text={"Hi!"} style={"red"} type={"div"} />
          <Tag text={"Hi!"} style={"red"} type={"div"} />
          <Tag text={"Hi!"} style={"red"} type={"div"} />
          <Tag text={"+ Добавить"} style={"red"} type={"button"} />
        </div>
      </div>
    </>
  );
};
