import React from "react";
import Input from "./components/Input";
import DateInput from "./components/DateInput";
import CheckInput from "./components/CheckInput";
import { Link } from "react-router-dom";
import Button from "../a_components/Button";

function BasicData(props) {
  return (
    <div className="smooth-animation mt-[60px] w-full h-full flex flex-col items-center gap-[36px] px-[16px] ">
      <div className=" text-[32px] text-[#334746] font-semibold">
        Основные данные
      </div>
      <Input placeholder="Фамилия*" />
      <Input placeholder="Имя*" />
      <Input placeholder="Отчество" />
      <DateInput label={"Дата рождения"} />
      <Input placeholder="Фамилия*" />
      <Input placeholder="Имя*" />
      <Input placeholder="Отчество" />
      <Input placeholder="Отчество" />

      <CheckInput
        label={
          <div className=" text-[#2B361E]">
            Я согласен с{" "}
            {
              <Link
                className=" font-bold hover:underline text-[#196343]"
                to={"/hello"}
              >
                Пользовательским соглашением
              </Link>
            }
            {" и "}
            {
              <Link
                className=" font-bold hover:underline text-[#196343]"
                to={"/hello"}
              >
                Политикой обработки персональных данных
              </Link>
            }
          </div>
        }
      />
      <CheckInput
        label={
          "Я согласен на обработку персональных данных, разрешенных субъектом персональных данных для распространения "
        }
      />
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

export default BasicData;
