import React from "react";
import Input from "./components/Input";
import DateInput from "./components/DateInput";

function Page_1(props) {
  return (
    <>
      <div className={"  flex-col gap-[18px] w-full " + (props.visible == 1 ? "flex" : "hidden")}>
        <Input placeholder="Фамилия*" name="last_name" />
        <Input placeholder="Имя*" name="first_name" />
        <Input placeholder="Отчество*" name="middle_name" />
        <DateInput label={"Дата рождения"} name="birth_date" />
        <Input placeholder="Телефон*" name="phone_number" />
        <Input placeholder="Почта*" name="email" />

        <select name="" id="" className=" text-[16px] p-[8px] rounded-[4px] outline outline-[1px] outline-[#33474647]  w-full">
          <option value="0">Страна</option>
          <option value="0">Город</option>
          <option value="0">Город</option>
          <option value="0">Город</option>
          <option value="0">Город</option>
        </select>

        <select name="" id="" className=" text-[16px] p-[8px] rounded-[4px] outline outline-[1px] outline-[#33474647]  w-full">
          <option value="0">Город</option>
          <option value="0">Город</option>
          <option value="0">Город</option>
          <option value="0">Город</option>
        </select>
      </div>
    </>
  );
}

export default Page_1;
