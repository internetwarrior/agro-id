import React from "react";

function Select(props) {
  return (
    <div className=" flex flex-col gap-[8px]">
      <label className=" text-[#00203399]" htmlFor={props?.name}>
        {props?.label}
      </label>

      <select
        className=" p-[13px] text-[#2B361E]"
        value={props?.value}
        type={props?.type}
        name={props?.name}
        placeholder={props?.placeholder}
        id={props.name}
      >
        <option value="0"> {props?.placeholder}</option>
      </select>
    </div>
  );
}

export default Select;
