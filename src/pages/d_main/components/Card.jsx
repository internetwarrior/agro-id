import React from "react";
import draftImage from "../../../static/draft/dummyImage.jpg";

function Card(props) {
  return (
    <div className="min-w-[244px] h-[336px] bg-black rounded-[8px] overflow-hidden relative">
      <img className=" w-full h-full object-cover" src={draftImage} alt="" />
      <p className=" color-default absolute p-[16px] bottom-0">
        Как получить грантовое финансирование для стартапа
      </p>
    </div>
  );
}

export default Card;
