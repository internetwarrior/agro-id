import React from "react";

import ImageBackground from "../../static/images/Card.png";
import { Link } from "react-router-dom";
import Button from "./Button";
// import scss from "./Main.module.scss";

function Banner_2() {
  const mystyle = {
    backgroundImage: `url(${ImageBackground})`,
    backgroundSize: " auto 100%",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={mystyle}
      className=" bg-white bg-right w-full h-full flex flex-col gap-5 py-[20px] px-[40px] z-10 shadow-lg rounded-[8px]  "
    >
      <h1 className=" text-brand text-2xl font-semibold">Реализуйте свое мероприятие</h1>
      <p className=" text-primary opacity-80">
        Вы можете мгновенно получить мнение аудитории по любому вопросу, во том числе во время мероприятия
      </p>

      <Link className="mt-auto" to={"create-edit/event"}>
        <Button
          title={"Создать мероприятие"}
          func={() => {
            console.log("works!");
          }}
        ></Button>
      </Link>
    </div>
  );
}

export default Banner_2;
