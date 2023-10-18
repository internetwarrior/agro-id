import React from "react";
import scss from "../post/Post.module.scss";
import search from "../../static/svg/ssvg.svg";

export const InputSearch = (props) => {
  return (
    <div
      className={
        scss.inputContainer + " bg-white px-[13px] py-[12px] text-[16px]"
      }
    >
      <img src={search} alt="j" />
      <input
        className={scss.input + " bg-transparent"}
        type="text"
        placeholder={props.placeholder}
        name=""
        id=""
      />
    </div>
  );
};
