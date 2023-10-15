import React from "react";
import Input from "./components/Input";
import DateInput from "./components/DateInput";
import CheckInput from "./components/CheckInput";
import { Link } from "react-router-dom";
import Button from "../a_components/Button";
import Arrow from "../../static/svg/leftArrow.svg";

function AdditionalData(props) {
  return (
    <div className="smooth-animation mt-[60px] w-full h-full flex flex-col items-center gap-[36px] px-[16px] ">
      <div className=" text-[32px] text-[#334746] font-semibold flex flex-col items-center">
        Дополнительные данные
        <button
          type="button"
          onClick={() => {
            props.goBack();
          }}
          className=" text-base flex items-center p-[10px]"
        >
          <img src={Arrow} className="pr-[14px]" alt="" srcset="" />
          Основные данные
        </button>
      </div>
      <Input placeholder="Отрасль *" />
      <Input placeholder="Специализация *" />
      <Input placeholder="Должность" />
      <Input placeholder="Компания" />
      <Input placeholder="ВУЗ" />
      <Input placeholder="Специальность" />
      <Input placeholder="Уровень образования *" />

      <div className=" mb-[48px]">
        <Button
          title={"Продолжить"}
          func={() => {
            props.button();
          }}
        />
      </div>
    </div>
  );
}

export default AdditionalData;
