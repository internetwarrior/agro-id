import React from "react";
import Title from "../a_components/Title";
import titleSVG from "../../static/svg/IconBook.svg";
import PostContent from "../a_components/PostContent";
import Post_bg from "../../static/images/post_bg.png";
import PublicCard from "./components/PublicCard";
import GoBackSVG from "../../static/svg/IconBackward.svg";
import GoForwSVG from "../../static/svg/IconForward.svg";
import { NavLink, Outlet } from "react-router-dom";
import world from "../../static/svg/IconWorldFilled.svg";
import sunIcon from "../../static/svg/sunIcon.svg";
import { InputSearch } from "../a_components/Input";


function Post() {


  return (
    <main className=" w-full min-h-[100vh] flex justify-center bg-[#FAF8F6]">
      <div className="  w-full  mb-[200px] flex items-center flex-col max-w-[1600px] gap-[28px]">
        <Outlet />
        <Title img={titleSVG} title="Публикации" />

        <PostContent
          title={"Публикации"}
          content="Вы можете разместить свою статью, публикацию или исследование по одной из тематик отрасли."
          buttonTitle={"Создать публикацию"}
          img={Post_bg}
        />

        <div className="flex   gap-3 	border-b-4  w-full 	">
          <div className="flex gap-1  	">
            <img src={world} alt="" />
            <NavLink className="   p-3 border-b-3 border-solid border-gray-300 text-[#00203399] active:text-black active:border-b-black">
              Все
            </NavLink>
          </div>
          <div className="flex gap-1">
            <img src={sunIcon} alt="" />
            <NavLink className="   p-3 border-b-3 border-solid border-gray-300 text-[#00203399] active:text-black active:border-black">
              {" "}
              Мои публикации
            </NavLink>{" "}
          </div>
        </div>

        <div className="flex justify-between w-full ">
          <div className=" w-full text-[#2B361E] text-[24px]  font-bold">
            Все публикации
          </div>
       <InputSearch placeholder={'Поиск по публикациям'}/>
       
    
        </div>
     
        <div className="grid grid-cols-4 gap-[24px]">
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
          <PublicCard link={"detailed/6"} />
        </div>
        <nav className=" flex gap-[2px] mt-[20px]">
          <button className=" flex items-center gap-[20px] px-[20px] text-[#4C4C4042]">
            <img src={GoBackSVG} alt="" />
            Назад
          </button>
          <div className="w-[48px] h-[48px] bg-[#00426912] text-[#4C4C40CC] flex justify-center items-center">
            1
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            2
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            3
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            4
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            5
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            ...
          </div>
          <div className="w-[48px] h-[48px] text-[#4C4C40CC] flex justify-center items-center ">
            50
          </div>

          <button className=" flex items-center gap-[20px] px-[20px] text-[#4C4C40CC]">
            Вперед
            <img src={GoForwSVG} alt="" />
          </button>
        </nav>
      </div>
    </main>
  );
}

export default Post;

