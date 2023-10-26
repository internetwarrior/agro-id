import React from "react";
import GoBackSVG from "../../static/svg/IconBackward.svg";
import GoForwSVG from "../../static/svg/IconForward.svg";
import { Link, useParams, useSearchParams } from "react-router-dom";

function Pagginator(props) {
  const { children } = props;

  const [searchParams, setSearchParams] = useSearchParams();
  const currPage = searchParams.get("page");

  return (
    <nav className=" flex gap-[2px] mt-[20px] justify-center">
      <button className=" flex items-center gap-[20px] px-[20px] text-[#4C4C4042]">
        <img src={GoBackSVG} alt="" />
        Назад
      </button>
      <Link to={"?page=" + 1} className="w-[48px] h-[48px] bg-[#00426912] text-[#4C4C40CC] flex justify-center items-center">
        {currPage}
      </Link>

      {children}
      <div className="w-[48px] h-[48px] flex justify-center items-center">...</div>
      <Link to={"?page=" + 1} className="w-[48px] h-[48px]  text-[#4C4C40CC] flex justify-center items-center">
        56
      </Link>
      <button className=" flex items-center gap-[20px] px-[20px] text-[#4C4C40CC]">
        Вперед
        <img src={GoForwSVG} alt="" />
      </button>
    </nav>
  );
}

export const Page = (props) => {
  const { page } = props;

  return (
    <Link to={"?page=" + page} className="w-[48px] h-[48px] flex justify-center items-center">
      {page}
    </Link>
  );
};

export default Pagginator;
