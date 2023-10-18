import React from "react";
import Banner from "./components/Banner";
import Button from "../a_components/Button";
import Card from "./components/Card";
import Title from "../a_components/Title";
import SVG1 from "../../static/svg/IconLineAndBarChart.svg";
import SecondCard from "../a_components/SecondCard";
import EventCard from "./components/EventCard";
import PublicCard from "../post/components/PublicCard";
import IntegrationCard from "./components/IntegrationCard";
import IntegImage from "../../static/draft/Integration.png";
import SecondBanner from "./components/SecondBanner";
import img2 from "../../static/svg/Vector (4).svg";
import img3 from "../../static/svg/crown.svg";
import img4 from "../../static/svg/leave.svg";
import img5 from "../../static/svg/IconBook.svg";
import img6 from "../../static/svg/flag.svg";
import scss from "./components/Main.module.scss";
import Chart_1 from "./charts/Chart";
import Horizontal_chart from "./charts/Horizontal";
import PieChart1 from "./charts/PieChart";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className=" w-full min-h-[100vh] flex justify-center bg-[#FAF8F6]">
      <div className="  w-full  mb-[200px] flex items-center flex-col ">
        <Outlet />
        <div className=" grid grid-cols-1   gap-6 mt-[28px] px-[20px] md:px-[40px] 2xl:px-[0px]  max-w-[1600px] w-full">
          <Banner />

          <SecondBanner className={scss.secondBanner} />
        </div>
        <div className=" w-full flex gap-[24px]  my-[24px] overflow-x-scroll px-[20px] md:px-[40px] 2xl:px-[0px]  max-w-[1600px]">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="px-[20px] md:px-[40px] 2xl:px-[0px] max-w-[1600px] w-full ">
          <Title img={SVG1} title="Показатели" />
          <div className=" grid grid-cols-1 md:grid-cols-2  gap-[24px] xl:grid-cols-3 mt-[24px]">
            <div className=" p-[24px] shadow-lg rounded-[8px] min-h-[363px] flex flex-col gap-[24px]">
              <div className=" text-[20px] font-medium">
                Организаций в системе
              </div>
              <div className="flex">
                <PieChart1 />
                <div className="flex flex-col gap-[12px] text-[10px]">
                  <span className="flex items-center gap-[4px]">
                    <div className="w-[8px] h-[8px] p-[4px] bg-[#2B361E] rounded-full"></div>{" "}
                    Сельхозпроизводители
                  </span>{" "}
                  <span className="flex items-center gap-[4px]">
                    <div className="w-[8px] h-[8px] p-[4px] bg-[#1C754F] rounded-full"></div>{" "}
                    Агрохолдинги
                  </span>{" "}
                  <span className="flex items-center gap-[4px]">
                    <div className="w-[8px] h-[8px] p-[4px] bg-[#EAF0E4] rounded-full"></div>{" "}
                    Смежные отрасли
                  </span>{" "}
                  <span className="flex items-center gap-[4px]">
                    <div className="w-[8px] h-[8px] p-[4px] bg-[#839159] rounded-full"></div>{" "}
                    Транспортная логистика
                  </span>
                </div>
              </div>
            </div>
            <div className=" p-[24px] shadow-lg rounded-[8px] min-h-[363px] flex flex-col gap-[24px]">
              <div className=" text-[20px] font-medium">
                Пользователей в системе
              </div>
              <div className=" flex flex-col">
                <div className="flex pl-[20px]  gap-[12px] text-[10px]">
                  <span className="flex items-center gap-[4px]">
                    <div className="w-[8px] h-[8px] p-[4px] bg-[#2B361E] rounded-full"></div>{" "}
                    Агропромышленность
                  </span>{" "}
                  <span className="flex items-center gap-[4px]">
                    <div className="w-[8px] h-[8px] p-[4px] bg-[#839159] rounded-full"></div>{" "}
                    Логистика
                  </span>
                  <span className="flex items-center gap-[4px]">
                    <div className="w-[8px] h-[8px] p-[4px] bg-[#EAF0E4] rounded-full"></div>{" "}
                    + level компании
                  </span>{" "}
                </div>
                <Horizontal_chart />
                <div className=" w-full flex justify-center">
                  <small className=" text-[12px] text-[#00203399]">
                    Количество человек, тыс.
                  </small>
                </div>
              </div>
            </div>
            <div className=" p-[24px] shadow-lg rounded-[8px] min-h-[363px] flex flex-col gap-[24px]">
              <div className=" text-[20px] font-medium">
                Проведено мероприятий
              </div>
              <div className=" flex flex-col">
                <div className="flex pl-[20px]  gap-[12px] text-[10px]">
                  <span className="flex items-center gap-[4px]">
                    <div className="w-[8px] h-[8px] p-[4px] bg-[#F38B00] rounded-full"></div>{" "}
                    Семинары
                  </span>{" "}
                  <span className="flex items-center gap-[4px]">
                    <div className="w-[8px] h-[8px] p-[4px] bg-[#F2C94C] rounded-full"></div>{" "}
                    Конференции
                  </span>
                  <span className="flex items-center gap-[4px]">
                    <div className="w-[8px] h-[8px] p-[4px] bg-[#56B9F2] rounded-full"></div>{" "}
                    Выставки
                  </span>{" "}
                  <span className="flex items-center gap-[4px]">
                    <div className="w-[8px] h-[8px] p-[4px] bg-[#22C38E] rounded-full"></div>{" "}
                    Онлайн-мероприятия
                  </span>{" "}
                </div>

                <Chart_1 />

                <div className=" w-full flex justify-center">
                  <small className=" text-[12px] text-[#00203399]">
                    Количество мероприятий
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[1600px] w-full">
          <div className="pl-[20px] md:px-[40px] 2xl:px-[0px] max-w-[1600px]">
            <Title img={img2} title="На этой неделе в Вашем городе" />
            <div className="flex overflow-x-scroll xl:overflow-visible xl:grid grid-cols-4 gap-6 pt-[24px]  ">
              <SecondCard />
              <SecondCard />
              <SecondCard />
              <SecondCard />
              <SecondCard />
              <SecondCard />
              <SecondCard />
              <SecondCard />

              <div className="grid-full flex justify-center pt-[16px]">
                <Button
                  title="Показать ещё"
                  func={() => {
                    console.log("Показываю ещё");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[1600px] w-full">
          <div className="pl-[24px] px-[20px] md:px-[40px] 2xl:px-[0px]">
            <Title img={img3} title="Важные мероприятия" />
            <div className="flex overflow-x-scroll xl:overflow-visible xl:grid grid-cols-4 gap-6  pt-[24px  ] ">
              <SecondCard />
              <SecondCard />
              <SecondCard />
              <SecondCard />
              <SecondCard />
              <SecondCard />
              <SecondCard />
              <SecondCard />
            </div>
          </div>
        </div>
        <div className="  px-[20px] md:px-[40px] 2xl:px-[0px] max-w-[1600px] w-full">
          <Title img={img4} title="Подборки событий" />
          <div className="grid grid-cols-1  md:grid-cols-6 gap-6 pt-[24px]">
            <EventCard cla small={true} />
            <EventCard small={true} />
            <EventCard small={false} />
            <EventCard small={false} />
            <EventCard small={false} />
          </div>
        </div>

        <div className=" max-w-[1600px] w-full">
          <div className=" pl-[20px] md:px-[40px] 2xl:px-[0px]">
            <Title
              link="post"
              img={img5}
              linkInclude={true}
              title="Публикации"
            />
            <div className="flex overflow-x-scroll xl:overflow-visible xl:grid grid-cols-4 gap-6 pt-[24px] ">
              <PublicCard />
              <PublicCard />
              <PublicCard />
              <PublicCard />
            </div>
          </div>{" "}
        </div>

        <div className=" px-[20px] md:px-[40px] 2xl:px-[0px] max-w-[1600px]">
          <Title img={img6} title="Интеграции" />
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 sm:grid-cols-2 gap-6 pt-[24px] justify-center ">
            <IntegrationCard img={IntegImage} />
            <IntegrationCard img={IntegImage} />
            <IntegrationCard img={IntegImage} />
            <IntegrationCard img={IntegImage} />
            <IntegrationCard img={IntegImage} />
            <IntegrationCard img={IntegImage} />
            <IntegrationCard img={IntegImage} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
