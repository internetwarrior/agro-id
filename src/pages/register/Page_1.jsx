import React from "react";
import Input from "./components/Input";
import DateInput from "./components/DateInput";

function Page_1(props) {
  return (
    <>
      <Input placeholder="Фамилия*" />
      <Input placeholder="Имя*" />
      <Input placeholder="Отчество" />
      <DateInput label={"Дата рождения"} />
      <Input placeholder="Фамилия*" />
      <Input placeholder="Имя*" />
      <Input placeholder="Отчество" />
      <Input placeholder="Отчество" />
    </>
  );
}

export default Page_1;
