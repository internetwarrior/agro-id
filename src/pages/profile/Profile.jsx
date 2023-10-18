import React from "react";
import Profile_bg from "../../static/images/CardUsersvg.svg";
import Photo_emty from "../../static/svg/Photo_empty.svg";
import Upload_SVG from "../../static/svg/upload.svg";
import Upload_SVG2 from "../../static/svg/IconUpload2.svg";
import Download_SVG from "../../static/svg/IconDownload.svg";
import EditButton from "./components/EditButton";
import RatingSVG from "../../static/svg/IconFavoriteFilled.svg";
import QuestionSVG from "../../static/svg/IconQuestion.svg";
import Title from "./components/Title";
import Header from "./components/Header";
import EditSection from "./components/EditSection";
import Tag from "../a_components/Tag";
import LittleHeader from "./components/LittleHeader";
import AddButton from "./components/AddButton";
import { Outlet } from "react-router-dom";

function Profile() {
  const uploadPicture = () => {
    console.log("Upload_pic");
  };

  const showRating = () => {
    console.log("Show Rating");
  };

  return (
    <main className="flex justify-center min-h-[100vh] bg-[#FAF8F6]">
      <Outlet />
      <div className=" max-w-[1600px] w-full flex flex-col gap-[32px] mt-[40px] mb-[200px]">
        <div className=" block relative">
          <div className="w-full relative max-h-[270px] h-full overflow-hidden rounded-[8px] ">
            <img
              src={Profile_bg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" p-[32px] w-full mt-[-80px] relative min-h-[170px] left-0 top-0 shadow-xl rounded-[8px] flex bg-[#FAF8F6] gap-[38px]">
            <form
              method="post"
              onChange={() => {
                uploadPicture();
              }}
              className=" flex flex-col items-center justify-center  gap-[16px] pt-[26px] pb-[34px] px-[22px] bg-[#FBF6EB] shadow-xl rounded-[8px]"
            >
              <div>
                <img src={Photo_emty} alt="" srcSet="" />
              </div>
              <div>
                <label
                  className="w-auto profile-border text-[14px] text-[#334746] px-[14px] py-[5px]  flex gap-[12px] "
                  htmlFor="profile_pic"
                >
                  Загрузить фото
                  <img src={Upload_SVG} alt="" />
                </label>
              </div>
              <input
                className=" hidden"
                type="file"
                name="profile_pic"
                id="profile_pic"
              />
            </form>
            <div className=" flex-grow py-[36px] flex flex-col gap-[20px]">
              <div className="text-[#196343] text-[24px] font-semibold max-w-[300px] leading-[120%]">
                Касаткина <br /> Снежана Владимировна
              </div>
              <div>Россия, Москва</div>
              <div>25.04.1992</div>
              <div className="flex gap-[20px] underline text-[#195B3F]">
                <div className=" cursor-pointer">+7 (977) 851-34-56</div>
                <div className=" cursor-pointer">kasatkina@mail.ru</div>
              </div>
            </div>

            <div className=" flex-grow py-[21px] flex flex-col gap-[24px]">
              <div className=" flex gap-[12px] flex-col">
                <Title title={"компании"} />
                <div>
                  <button className=" rounded-[4px] py-[4px] bg-[#FBF6EB] color-[#6F6E62] px-[12px] outline outline-[#B5C4C7] outline-[0.5px] w-auto">
                    Smart Agro
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <EditSection
                  func={() => {
                    console.log("hey");
                  }}
                  title={"Проекты"}
                />
              </div>
              <div className="flex flex-col gap-[12px]">
                <Title title={"отрасль и специализация"} />
                <div className=" font-medium text-[#2B361E] text-[20px]">
                  Сельское хозяйство, Трейдинг
                </div>
              </div>
            </div>

            <div className="flex  flex-col gap-[20px]  min-w-[220px] ">
              <div className=" flex justify-end w-full">
                <EditButton link={"personal"} />
              </div>
              <button
                type="button"
                onClick={showRating}
                className=" flex gap-[8px] justify-center items-center py-[5px] px-[12px] outline outline-[#AE8E49] rounded-full outline-[0.5px]"
              >
                {" "}
                <img src={RatingSVG} alt="" srcSet="" />
                Ваш рейтинг <img src={QuestionSVG} alt="" srcSet="" />
              </button>
              <div className=" text-[#195B3F] text-[20px] font-medium">
                ID 236788
              </div>
              <div className=" flex flex-col gap-[10px] w-full">
                <button className=" outline-[#4C4C40] outline outline-[0.5px] py-[8px] rounded-[4px] gap-[14px] flex items-center justify-center w-full">
                  Загрузить резюме
                  <img src={Upload_SVG2} alt="" srcSet="" />
                </button>
                <button className=" bg-[#004269] bg-opacity-[7%] py-[8px] rounded-[4px] gap-[14px] flex items-center justify-center w-full">
                  Скачать резюме
                  <img src={Download_SVG} alt="" srcSet="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" shadow-xl min-h-[250px] rounded-[8px] p-[36px] flex flex-col gap-[36px]">
          <Header title={"Данные для резюме"} link={"resume"} />
          <div className=" flex gap-[36px]">
            <div className=" grid grid-cols-3 justify-between gap-[36px] flex-grow">
              <EditSection
                title={"желаемая должность"}
                func={() => {
                  console.log("hey");
                }}
              />
              <EditSection
                title={"квалификация"}
                func={() => {
                  console.log("hey");
                }}
              />
              <EditSection
                title={"Ожидаемая заработная плата"}
                func={() => {
                  console.log("hey");
                }}
              />
              <EditSection
                title={"профессиональные навыки"}
                func={() => {
                  console.log("hey");
                }}
              />
              <EditSection
                title={"о себе"}
                func={() => {
                  console.log("hey");
                }}
              />
            </div>
            <div className=" flex flex-col gap-[12px] w-[465px] ">
              <Title title={"интересы"} />
              <div className="block">
                <Tag title={"Экономика"} />
                <Tag title={"Предпринимательство"} />
                <Tag title={"Государственное управление"} />
                <Tag title={"Инновации"} />
                <Tag title={"Социальное предпринимательство"} />
                <Tag title={"Международное сотрудничество"} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[32px] min-h-[200px]">
          <div className="flex flex-col shadow-xl w-full h-full p-[36px] rounded-[8px] gap-[32px]">
            <Header title={"Работа"} link={"job"} />
            <LittleHeader title={"Трейдер в ООО «Smart Agro»"} />
            <div>
              <AddButton />
            </div>
          </div>{" "}
          <div className=" flex flex-col gap-[24px] shadow-xl w-full h-full p-[36px] rounded-[8px]">
            <Header title={"Образование"} link={"education"} />
            <LittleHeader title={"МГИМО МИД России"} />
            <div className="flex flex-col gap-[12px]">
              <Title title={"Специальность и уровень"} />
              <div className=" text-[#2B361E]">
                Международные отношения,
                <br /> Магистратура
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[32px] min-h-[200px]">
          <div className=" w-full h-full"></div>
          <div className="w-full shadow-xl h-full p-[36px] rounded-[8px] flex flex-col gap-[24px]">
            <Header
              title={"Сертификаты и дипломы"}
              accomplishments
              link={"accomplishments"}
            />
            <div>
              <AddButton />
            </div>
            <div>
              <button className=" px-[55px] w-auto outline-[#4C4C40] outline outline-[0.5px] py-[8px] rounded-[4px] gap-[14px] flex items-center justify-center">
                Загрузить
                <img src={Upload_SVG2} alt="" srcSet="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
