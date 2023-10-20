import React from "react";
import agroId from "../../static/images/Groupregister 2.png";
import scss from "../d_main/components/Main.module.scss";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SignBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    
    <div className=" bg-[#FAF8F6] p-[44px]  min-h-[100vh]  rounded-[8px] shadow-lg hidden xl:flex">
      
      <div className="flex  flex-col gap-10 ">
      <div
        className={
          scss.bg + " flex justify-center items-center w-full h-[738px]"
        }
      >
        
    <div className="w-[738px] h-full ">
    <Slider {...settings}>
          <div>
          <img src={agroId} alt="kk" />
          </div>
          <div>
          <img src={agroId} alt="kk" />
          </div>
          <div>
          <img src={agroId} alt="kk" />
          </div>
        
        </Slider>
        
    </div>
       
      </div>
      
      <div className="flex flex-col p-10  justify-center gap-4 text-center">
        <p className="text-[32px] text-[#334746] font-semibold">Создавайте мероприятия</p>
        <span className=" text-[#334746] ">
          Организуйте онлайн или офлайн мероприятие, проведите конференцию или
          вебинар, легко сделайте рассылку целевой группе
        </span>
        
      </div>
        </div>
      
    </div>
  );
}

export default SignBanner;
