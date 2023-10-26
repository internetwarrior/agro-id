import React from "react";

import Button from "./a_components/Button";
import Card from "./d_main/components/Card";
import Title from "./a_components/Title";
import SVG1 from "../static/svg/IconLineAndBarChart.svg";
import SecondCard from "./a_components/SecondCard";
import EventCard from "./d_main/components/EventCard";
import PublicCard from "./post/components/PublicCard";
import IntegrationCard from "./d_main/components/IntegrationCard";
import IntegImage from "../static/draft/Integration.png";

import img2 from "../static/svg/Vector (4).svg";
import img3 from "../static/svg/crown.svg";
import img4 from "../static/svg/leave.svg";
import img5 from "../static/svg/IconBook.svg";
import img6 from "../static/svg/flag.svg";

import { Outlet } from "react-router-dom";
import Chart_1 from "./d_main/charts/Chart_1";
import Chart_2 from "./d_main/charts/Chart_2";
import Chart_3 from "./d_main/charts/Chart_3";
import SliceWrapper from "./a_components/wrappers/SliceWrapper";
import GridWrapper from "./a_components/wrappers/GridWrapper";
import Banner_1 from "./d_main/components/Banner_1";
import Banner_2 from "./a_components/Banner_2";

function Main() {
  return (
    <>
      <Outlet />
      <SliceWrapper>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2   gap-6">
          <Banner_1 />
          <Banner_2 />
          <div className=" w-full flex gap-[24px] overflow-x-scroll grid-full pb-[16px]  ">
            {[1, 2, 3, 4, 5, 6, 7, 7, 7, 7].map((val) => console.log(val) || <Card />)}
          </div>
        </div>
      </SliceWrapper>

      <SliceWrapper>
        <Title img={SVG1} title="Показатели" />

        <div className=" grid grid-cols-1 md:grid-cols-2  gap-[24px] xl:grid-cols-3 mt-[24px]">
          <div className=" p-[24px] shadow-lg rounded-[8px] min-h-[260px] flex flex-col gap-[24px]">
            <div className=" text-[20px] font-medium">Организаций в системе</div>
            <div className="flex">
              <Chart_1 />
              <div className="flex flex-col gap-[12px] text-[10px]">
                <span className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] p-[4px] bg-[#2B361E] rounded-full"></div> Сельхозпроизводители
                </span>{" "}
                <span className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] p-[4px] bg-[#1C754F] rounded-full"></div> Агрохолдинги
                </span>{" "}
                <span className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] p-[4px] bg-[#EAF0E4] rounded-full"></div> Смежные отрасли
                </span>{" "}
                <span className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] p-[4px] bg-[#839159] rounded-full"></div> Транспортная логистика
                </span>
              </div>
            </div>
          </div>

          <div className="  p-[24px] shadow-lg rounded-[8px] min-h-[260px] flex flex-col gap-[24px]">
            <div className=" text-[20px] font-medium">Пользователей в системе</div>
            <div className=" flex flex-col">
              <div className="flex pl-[20px]  gap-[12px] text-[10px]">
                <span className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] p-[4px] bg-[#2B361E] rounded-full"></div> Агропромышленность
                </span>{" "}
                <span className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] p-[4px] bg-[#839159] rounded-full"></div> Логистика
                </span>
                <span className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] p-[4px] bg-[#EAF0E4] rounded-full"></div> + level компании
                </span>{" "}
              </div>
              <Chart_2 />
              <div className=" w-full flex justify-center">
                <small className=" text-[12px] text-[#00203399]">Количество человек, тыс.</small>
              </div>
            </div>
          </div>

          <div className="  p-[24px] shadow-lg rounded-[8px] min-h-[260px] flex flex-col gap-[24px]">
            <div className=" text-[20px] font-medium">Проведено мероприятий</div>
            <div className=" flex flex-col">
              <div className="flex pl-[20px]  gap-[12px] text-[10px]">
                <span className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] p-[4px] bg-[#F38B00] rounded-full"></div> Семинары
                </span>{" "}
                <span className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] p-[4px] bg-[#F2C94C] rounded-full"></div> Конференции
                </span>
                <span className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] p-[4px] bg-[#56B9F2] rounded-full"></div> Выставки
                </span>{" "}
                <span className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] p-[4px] bg-[#22C38E] rounded-full"></div> Онлайн-мероприятия
                </span>{" "}
              </div>

              <Chart_3 />

              <div className=" w-full flex justify-center">
                <small className=" text-[12px] text-[#00203399]">Количество мероприятий</small>
              </div>
            </div>
          </div>
        </div>
      </SliceWrapper>

      <SliceWrapper>
        <Title img={img2} title="На этой неделе в Вашем городе" />
        <GridWrapper>
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
        </GridWrapper>
      </SliceWrapper>

      <SliceWrapper>
        <Title img={img3} title="Важные мероприятия" />
        <GridWrapper>
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
          <SecondCard />
        </GridWrapper>
      </SliceWrapper>

      <SliceWrapper>
        <Title img={img4} title="Подборки событий" />
        <div className="grid grid-cols-1  md:grid-cols-6 gap-6 pt-[24px]">
          <EventCard cla small={true} />
          <EventCard small={true} />
          <EventCard small={false} />
          <EventCard small={false} />
          <EventCard small={false} />
        </div>
      </SliceWrapper>

      <SliceWrapper>
        <Title link="post" img={img5} linkInclude={true} title="Публикации" />
        <GridWrapper>
          <PublicCard />
          <PublicCard />
          <PublicCard />
          <PublicCard />
        </GridWrapper>
      </SliceWrapper>

      <SliceWrapper>
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
      </SliceWrapper>
    </>
  );
}

export default Main;
