import React, { useEffect, useRef, useState } from "react";
import Left from "../../../static/svg/IconArrowLeft.svg";
import Right from "../../../static/svg/IconArrowRight.svg";
import DraftImage from "../../../static/draft/default_bg.jpg";
import DraftImage2 from "../../../static/draft/profile_bg.jpg";
import Slider from "react-slick";

function Banner_1() {
  const sliderRef = useRef();

  const [bannerList, setBannerList] = useState([
    {
      title: "Я построил реакт",
      location: "Бишкек, Кыргызстан",
      time: "30 Августа - 31 Декабрь",
      img: "https://source.unsplash.com/random",
      tags: ["Maybe", "Somebody"],
    },
    {
      title: "Обратись к нам",
      location: "Астана, Казахстан",
      time: "30 Августа - 31 Декабрь",
      img: DraftImage,
      tags: ["hello", "Brother"],
    },
    {
      title: "Фермеры",
      location: "Ташкент, Узбекистан",
      time: "30 Августа - 31 Декабрь",
      img: DraftImage2,
      tags: ["Brpp", "MyMY"],
    },
  ]);

  const [currSlide, setCurrSlide] = useState(0);

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    beforeChange: (slideNum) => {
      setCurrSlide(slideNum);
    },
  };

  return (
    <div className="  card-gradient rounded-[8px]  shadow-lg px-[16px] pt-[18px] pb-[16px] text-white flex flex-col-reverse flex-col sm:flex-row">
      <div className="flex-grow flex flex-col">
        <div className="flex gap-4 text-[12px] my-[14px] ">
          {bannerList[currSlide].tags.map((tag) => (
            <div>#{tag}</div>
          ))}
        </div>
        <h1 className="mb-[14px] font-bold text-[24px] ">{bannerList[currSlide].title}</h1>
        <div>
          <div className=" color-default">{bannerList[currSlide].location}</div>
          <div className=" text-[12px] color-default opacity-80">{bannerList[currSlide].time}</div>
        </div>
        <div className="mt-auto pt-[16px] flex gap-2">
          <button type="button" onClick={gotoPrev} className=" bg-[#EAF0E4] rounded-full">
            <img src={Left} alt="" />
          </button>{" "}
          <button onClick={gotoNext} className=" bg-[#EAF0E4] rounded-full">
            <img src={Right} alt="" />
          </button>
        </div>
      </div>
      <div className="w-full max-w-[400px]  overflow-hidden ">
        <Slider ref={sliderRef} {...settings}>
          {bannerList.map((banner) => {
            return (
              <div className="w-full h-full  h-[300px] overflow-hidden">
                <img className=" h-full w-full object-cover" src={banner.img} alt="" srcset="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Banner_1;
