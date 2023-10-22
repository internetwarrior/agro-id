import React from "react";

function Button(props) {
  return (
    <div className={props?.class}>
      <button
        type="button"
        onClick={props?.func}
        className={
          " px-[20px] bg-[#AE8E49] font-medium color-default rounded-[4px] py-[11.5px] text-[12px] uppercase flex justify-center items-center gap-[8px]" +
          " " +
          props?.class
        }
      >
        {props?.title}
        {props?.text}
        {props?.imgInclude && <img src={props?.img} alt="" />}
      </button>
    </div>
  );
}

export default Button;
