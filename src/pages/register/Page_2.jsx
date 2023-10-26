import React from "react";
import Input from "./components/Input";

function Page_2(props) {
  return (
    <>
      <div className={" flex-col gap-[18px] w-full " + (props.visible === 2 ? "flex" : "hidden")}>
        <select name="" id="" className=" text-[16px] p-[8px] rounded-[4px] outline outline-[1px] outline-[#33474647]  w-full">
          <option value="0">Отрасль*</option>
        </select>
        <select name="" id="" className=" text-[16px] p-[8px] rounded-[4px] outline outline-[1px] outline-[#33474647]  w-full">
          <option value="0">Специализация*</option>
        </select>

        <Input placeholder="Должность" />
        <Input placeholder="Компания" name="company" />
        <Input placeholder="ВУЗ" name="unverisity" />
        <Input placeholder="Специальность" name="education" />
        <select
          name="education_level"
          id=""
          className=" text-[16px] p-[8px] rounded-[4px] outline outline-[1px] outline-[#33474647]  w-full"
        >
          <option value="0">Специализация*</option>
        </select>
      </div>
    </>
  );
}

export default Page_2;
