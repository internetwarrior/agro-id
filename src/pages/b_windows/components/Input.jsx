import React from "react";

function Input(props) {
  return (
    <div className=" flex flex-col gap-[8px]">
      <label className=" text-[#00203399]" htmlFor={props?.name}>
        {props?.label}
      </label>
      <input
        className=" p-[13px] text-[#2B361E]"
        type={props.type}
        name={props?.name}
        placeholder={props?.placeholder}
      />
    </div>
  );
}

export default Input;
