import React from "react";
import Button from "../../a_components/Button";
// import ImageBackground from "../../../static/images/card_bg.png";
import { Link } from "react-router-dom";
import scss from './Main.module.scss'
function SecondBanner() {
  return (
    <div className="   relative overflow-hidden shadow-lg rounded-[8px] ">
      {/* <img
        src={ImageBackground}
        alt="загрузка..."
        className="w-full h-full absolute top-0 left-0 -z-10 object-cover "
      /> */}
<div className={scss.bg}>
<div className="  w-full h-full flex flex-col gap-5 py-[20px] px-[40px]   ">
        <h1 className=" text-brand text-2xl font-semibold">
          Реализуйте свое мероприятие
        </h1>
        <p className=" text-primary opacity-80">
          Вы можете мгновенно получить мнение аудитории по любому вопросу, во
          том числе во время мероприятия
        </p>
     
        <Link to={"create-edit/event"}>
        <Button
          title={"Создать мероприятие"}
          func={() => {
            console.log("works!");
          }}
        ></Button>
        </Link>
      </div>
</div>
    
    </div>
  );
}

export default SecondBanner;
