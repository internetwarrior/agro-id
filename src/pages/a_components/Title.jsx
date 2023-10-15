import React from "react";
import { Link } from "react-router-dom";

function Title(props) {
  return (
    <div className="flex gap-2 pt-[56px] w-full items-center">
      <img src={props?.img} alt="" />{" "}
      <h1 className=" text-[24px] md:text-[32px] text-[#2B361E] font-bold">
        {props?.title}
      </h1>
      {props.linkInclude && (
        <Link className=" opacity-50" to={"/" + props.link}>
          {"("}Посмтреть все{")"}
        </Link>
      )}
    </div>
  );
}

export default Title;
