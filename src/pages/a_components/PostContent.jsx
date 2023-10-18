import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function PostContent(props) {
  return (
    <div className="p-[44px] overflow-hidden relative w-full flex flex-col gap-[28px] shadow-xl rounded-[8px]">
      <div className=" font-bold text-[24px] text-[#2B361E]">{props.title}</div>
      <div className=" text-[20px]  text-[#2B361E] opacity-80 max-w-[900px]">
        {props.content}
      </div>
      <Link to={"create-edit/event"}>  <Button
          title={"Создать мероприятие"}
      
        ></Button></Link>
      <div className="w-full h-full absolute top-0 left-0 -z-10">
        <img
          className=" w-full h-full object-cover "
          src={props.img}
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
}

export default PostContent;
