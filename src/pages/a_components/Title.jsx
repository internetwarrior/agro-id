import React from "react";
import { Link } from "react-router-dom";
import { InputSearch } from "./Input";

function Title(props) {
  return (
    <div className="gap-[20px] grid grid-cols-2 pt-[56px] w-full items-center">
      <h1 className=" text-[24px] flex gap-2  md:text-[32px] text-[#2B361E] font-bold">
        {" "}
        {props?.img && <img src={props?.img} alt="" />}
        {props?.title}
        {props?.text}
      </h1>
      {props?.search && <InputSearch placeholder={props?.textSearch ? props?.textSearch : "Поиск...."} />}
    </div>
  );
}

export default Title;
