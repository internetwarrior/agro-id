import React from "react";
import EditSVG from "../../static/svg/exit_svg.svg";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PrivateRoutes from "../../settings/PrivateRoutes";
import Input from "./components/Input";
import Tag from "../a_components/Tag";
import Attatch from "../../static/svg/IconAttach.svg";

function CreateEdit(props) {
  const { reason } = useParams();
  const location = useLocation();

  const [title, setTitle] = useState("Название страницы");

  const lastLocation = location.pathname.split("/").filter((path) => path !== reason && path !== "create-edit")[1];

  return (
    <>
      <PrivateRoutes
        element={
          <div className=" fixed w-full h-full bg-black bg-opacity-30 z-50 top-0 left-0 flex justify-center items-center">
            <form className=" py-[34px] px-[44px] min-w-[1000px] min-h-[400px] bg-[#FAF8F6] rounded-[8px] flex flex-col gap-[24px]">
              <div className=" flex justify-between items-start grid-full">
                <h4 className=" text-[32px] text-[#334746] font-semibold">{title + ":" + reason}</h4>
                <Link to={lastLocation === undefined ? "/" : "/" + lastLocation}>
                  <img src={EditSVG} alt="" />
                </Link>
              </div>
              {reason == "profile-personal" && lastLocation == "profile" && <MainInformation />}

              <Job />

              {reason == "profile-resume" && lastLocation == "profile" && <Resume />}
              {reason == "profile-education" && lastLocation == "profile" && <Education />}
              {reason == "profile-accomplishments" && lastLocation == "profile" && <Accomplishments />}
              {reason == "profile-job" && lastLocation == "profile" && <Job />}
              <div className="grid grid-cols-2 gap-[24px]">
                {/* <div>dd</div>
                <div>dd</div> */}

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

                <Link
                  to={"/" + (lastLocation !== undefined ? lastLocation : "")}
                  className=" flex justify-center py-[12px] outline outline-[#4C4C40] outline-[1px] rounded-[4px]"
                >
                  Отмена
                </Link>
                <input className="flex justify-center py-[12px] bg-[#AE8E49] text-white rounded-[4px]" value="Сохранить" type="submit" />
              </div>
            </form>
          </div>
        }
      />
    </>
  );
}

const Accomplishments = () => {
  return (
    <div className="grid grid-cols-2 gap-[24px]">
      <Input label={"Учебное заведение"} name={"firstName"} placeholder={"Введите Фамилию"} type={"text"} />
      <Input label={"Вид обучения"} name={"firstName"} placeholder={"Введите имя"} type={"text"} />
      <Input label={"Название обучения"} name={"firstName"} placeholder={"Введите отчество"} type={"text"} />
      <Input label={"Период обучения"} name={"firstName"} placeholder={"Введите Дата рождения"} type={"text"} />
      <Input label={"Документы"} name={"firstName"} placeholder={"Введите Дата рождения"} type={"text"} />
      <div>+ Добавить место учебы</div>
    </div>
  );
};

const Job = () => {
  return (
    <div className="grid grid-cols-2 gap-[24px]">
      {/* <Input
        label={"Должность"}
        name={"firstName"}
        placeholder={"Введите Фамилию"}
        type={"text"}
      />
      <Input
        label={"Компания"}
        name={"firstName"}
        placeholder={"Введите имя"}
        type={"text"}
      />
      <Input
        label={"Период работы"}
        name={"firstName"}
        placeholder={"Введите отчество"}
        type={"text"}
      />
      <Input
        label={"Обязанности"}
        name={"firstName"}
        placeholder={"Введите Дата рождения"}
        type={"text"}
      />
      <Input
        label={"Достижения"}
        name={"firstName"}
        placeholder={"Введите Дата рождения"}
        type={"text"}
      /> */}
      {/* <div>+ Добавить место работы</div> */}
    </div>
  );
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
      <div className="grid grid-cols-2 gap-[24px]">
        <Input label={"Фамилия"} name={"firstName"} placeholder={"Введите Фамилию"} type={"text"} />
        <Input label={"Имя"} name={"firstName"} placeholder={"Введите имя"} type={"text"} />
        <Input label={"Отчество"} name={"firstName"} placeholder={"Введите отчество"} type={"text"} />
        <Input label={"Дата рождения"} name={"firstName"} placeholder={"Введите Дата рождения"} type={"text"} />
        <Input label={"Телефон"} name={"firstName"} placeholder={"Введите телефон"} type={"text"} />
        <Input label={"Эл. почта"} name={"firstName"} placeholder={"Введите эл.почта"} type={"email"} />
        <Input label={"Страна "} name={"firstName"} placeholder={"Введите страну"} type={"text"} />
        <Input label={"Город"} name={"firstName"} placeholder={"Введите Город"} type={"text"} />
        <Input label={"Отрасль деятельности"} name={"firstName"} placeholder={"Введите Отрасль деятельности"} type={"text"} />
        <Input label={"Профессиональная область"} name={"firstName"} placeholder={"Введите Профессиональная область"} type={"text"} />
      </div>
      <div className=" w-full flex justify-between">
        <div className=" text-[#00203399]">Компании</div>
        <div className=" flex gap-[10px]">
          <div className="bg-[#FBF6EB] outline outline-[0.5px] outline-[#00426947] text-[#4C4C40CC]  py-[4px] rounded-[4px] px-[12px]">
            ООО Стратосфера
          </div>
          <div className="bg-[#FBF6EB] outline outline-[0.5px] outline-[#00426947] text-[#4C4C40CC]  py-[4px] rounded-[4px] px-[12px]">
            + Добавить
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-between">
        <div className=" text-[#00203399]">Проекты</div>
        <div className=" flex gap-[10px]">
          <div className="bg-[#EAF0E4] outline outline-[0.5px] outline-[#00426947] text-[#4C4C40CC]  py-[4px] rounded-[4px] px-[12px]">
            Стратосфера
          </div>
          <div className="bg-[#EAF0E4] outline outline-[0.5px] outline-[#00426947] text-[#4C4C40CC]  py-[4px] rounded-[4px] px-[12px]">
            + Добавить
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEdit;
