import React from "react";
import agroId from "../../static/images/Groupregister 2.png";
import scss from "../d_main/components/Main.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots) => <ul className=" bg-black">{dots}</ul>,
  };
  const hey = [1, 2, 3];
  return (
    <div className="p-[44px] shadow-xl rounded-[8px] pb-[68px]">
      <Slider {...settings}>
        {hey.map(() => {
          return (
            <div>
              <div className="flex flex-col items-center gap-[24px] pb-[24px]">
                <img src={agroId} />
                <div className=" text-[32px] font-bold text-[#334746]">Создавайте мероприятия</div>
                <div className="text-[#4C4C40] text-[20px] font-[500] max-w-[470px] text-center">
                  Организуйте онлайн или офлайн мероприятие, проведите конференцию или вебинар, легко сделайте рассылку целевой группе
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Banner;
