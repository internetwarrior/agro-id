import React from "react";
import { Link } from "react-router-dom";
import SVG_1 from "../../../static/svg/IconArrowLeft2.svg";
import SVG_2 from "../../../static/svg/IconArrowLeft3.svg";
import SVG_3 from "../../../static/svg/IconArrowRight4.svg";

function Post_Navigator() {
  return (
    <nav className=" flex items-center justify-between grid-full">
      <Link to={"/post"} className="flex gap-[12px] flex-grow">
        {" "}
        <img src={SVG_1} alt="" /> {"К списку публикаций"}
      </Link>
      <div className=" flex gap-[8px]">
        <Link to={"/post/detailed/4"}>
          {" "}
          <div className=" p-[12px] bg-[#00203314] rounded-full">
            <img src={SVG_2} alt="" srcset="" />
          </div>
        </Link>
        <Link to={"/post/detailed/6"}>
          {" "}
          <div className=" p-[12px] bg-[#00203314] rounded-full">
            <img src={SVG_3} alt="" srcset="" />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Post_Navigator;
