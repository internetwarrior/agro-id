import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import scss from "../d_main/components/Main.module.scss";

function PostContent(props) {
  return (
    <div className={scss.bgk}>
      <div className="p-[44px] overflow-hidden relative w-full flex flex-col gap-[28px] shadow-xl rounded-[8px]">
        <div className=" font-bold text-[18px] text-[#2B361E]">{props.title}</div>
        <div className=" text-[16px]  text-[#2B361E] opacity-80 max-w-[900px]">{props.content}</div>
        <Link to={"create-edit/event"}>
          <Button title={props.buttonTitle}></Button>
        </Link>
      </div>
    </div>
  );
}

export default PostContent;
