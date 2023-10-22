import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import IMG from "../../static/draft/dummyImage.jpg";
import Icon_1 from "../../static/svg/social_media/vk.svg";
import Icon_2 from "../../static/svg/social_media/yandexDzen.svg";
import Icon_3 from "../../static/svg/social_media/wa.svg";
import Icon_4 from "../../static/svg/social_media/tel.svg";
import Icon_5 from "../../static/svg/social_media/ok.svg";
import Icon_6 from "../../static/svg/social_media/IconCopy.svg";
import Post_Navigator from "./components/Post_Navigator";
import PublicCard from "./components/PublicCard";
import SliceWrapper from "../a_components/wrappers/SliceWrapper";
import GridWrapper from "../a_components/wrappers/GridWrapper";

function Detailed() {
  const { id } = useParams();

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SliceWrapper>
        <Post_Navigator />
      </SliceWrapper>

      <SliceWrapper>
        <div className="max-h-[500px] overflow-hidden rounded-[8px] ">
          <img src={IMG} alt="" className="w-full object-cover " />
        </div>
      </SliceWrapper>

      <SliceWrapper className={"flex gap-[30px]"}>
        <div className=" flex flex-col gap-[36px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <div className="text-[#1C754F] leading-[140%] uppercase text-[12px] font-medium">Автор</div>
              <div className=" flex gap-[8px] text-[#2B361E]  leading-[140%] text-[12px] items-center">
                <div className=" w-[40px] h-[40px]">
                  <img src={IMG} className="w-full h-full rounded-full" alt="" srcSet="" />
                </div>
                <div>
                  Константин <br /> Бенифициаров
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#1C754F] leading-[140%] uppercase text-[12px] font-medium">ПОДЕЛИТЬСЯ:</div>
              <SocialMedia />
            </div>
          </div>

          <div className=" text-[32px] font-semibold text-[#2B361E] self-stretch leading-[120%]">
            Заброшенную землю в Нижегородской области преобразовали в поля с пшеницей и рапсом
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <div className="text-[#1C754F] leading-[140%] uppercase text-[12px] font-medium">дата</div>
              <div className="text-[#2B361E] leading-[140%] text-[12px]">24 июля 2023 г.</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#1C754F] leading-[140%] uppercase text-[12px] font-medium">фото</div>
              <div className="text-[#2B361E] leading-[140%] text-[12px]">Дмитрий Лукьянов, AgroXXI.ru</div>
            </div>
          </div>

          <div className=" mt-[160px] flex gap-[28px]">
            <Pics />
            <Pics />
          </div>
        </div>

        <div className=" text-[15px]">{dummyText}</div>
      </SliceWrapper>

      <SliceWrapper>
        <div className=" grid-full mb-[30px] text-[24px] font-semibold ">Читайте также:</div>

        <GridWrapper>
          <PublicCard />
          <PublicCard />
          <PublicCard />
          <PublicCard />
        </GridWrapper>
      </SliceWrapper>
    </>
  );
}

export default Detailed;

const Pics = () => {
  return (
    <div className="h-[250px] w-[250px]">
      <img className="rounded-[8px] w-full h-full object-cover" src={IMG} alt="" srcset="" />
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className=" flex items-center outline outline-[1px] outline-[#00426947] rounded-[4px]">
      <button className="p-[12px]">
        <img src={Icon_1} alt="" srcset="" />
      </button>
      <div className="w-[1px] h-[26px] bg-[#00426947]"></div>
      <button className="p-[12px]">
        <img src={Icon_2} alt="" srcset="" />
      </button>
      <div className="w-[1px] h-[26px] bg-[#00426947]"></div>
      <button className="p-[12px]">
        <img src={Icon_3} alt="" srcset="" />
      </button>
      <div className="w-[1px] h-[26px] bg-[#00426947]"></div>
      <button className="p-[12px]">
        <img src={Icon_4} alt="" srcset="" />
      </button>
      <div className="w-[1px] h-[26px] bg-[#00426947]"></div>
      <button className="p-[12px]">
        <img src={Icon_5} alt="" srcset="" />
      </button>
      <div className="w-[1px] h-[26px] bg-[#00426947]"></div>
      <button className="p-[12px]">
        <img src={Icon_6} alt="" srcset="" />
      </button>
    </div>
  );
};

const dummyText = `В 2023 году в Нижегородской области в сельхозоборот введено 1000 га земель Управлением Россельхознадзора по Нижегородской
области и Республике Марий Эл ведется планомерная работа, направленная на вовлечение неиспользуемых земель в
сельскохозяйственный оборот. Соответствующие мероприятия проводятся сотрудниками Управления во исполнение Государственной
программы эффективного вовлечения в оборот земель сельскохозяйственного назначения и развития мелиоративного комплекса
Российской Федерации. Специалисты отмечают, что выбывшие из сельскохозяйственного оборота земли деградируют. Фактически вновь
возникают ранее решенные проблемы чересполосицы, вкрапливаний, вклиниваний и, как следствие, на таких землях
сельскохозяйственные товаропроизводители недополучают существенный объем продукции растениеводства. Так, в апреле 2023 года по
результатам выездного обследования Обществу с ограниченной ответственностью Птицефабрика «Павловская» было объявлено
предостережение о недопустимости нарушения обязательных требований законодательства за зарастание сорной и редкой древесной
растительностью на площади 550 га. Правообладатель земельного участка своевременно принял меры по устранению зарастания –
участок был распахан и подготовлен к севу рапса и озимой пшеницы. В результате планомерной работы Управления за текущий год в
Нижегородской области уже введено в сельскохозяйственный оборот 1000 га сельхозземель в Павловском, Сергачском, Вачском,
Богородском и Большемурашкинском муниципальных округах. В 2023 году в Нижегородской области в сельхозоборот введено 1000 га
земель Управлением Россельхознадзора по Нижегородской области и Республике Марий Эл ведется планомерная работа, направленная на
вовлечение неиспользуемых земель в сельскохозяйственный оборот. Соответствующие мероприятия проводятся сотрудниками Управления
во исполнение Государственной программы эффективного вовлечения в оборот земель сельскохозяйственного назначения и развития
мелиоративного комплекса Российской Федерации. Специалисты отмечают, что выбывшие из сельскохозяйственного оборота земли
деградируют. Фактически вновь возникают ранее решенные проблемы чересполосицы, вкрапливаний, вклиниваний и, как следствие, на
таких землях сельскохозяйственные товаропроизводители недополучают существенный объем продукции растениеводства. Так, в апреле
2023 года по результатам выездного обследования Обществу с ограниченной ответственностью Птицефабрика «Павловская» было
объявлено предостережение о недопустимости нарушения обязательных требований законодательства за зарастание сорной и редкой
древесной растительностью на площади 550 га. Правообладатель земельного участка своевременно принял меры по устранению
зарастания – участок был распахан и подготовлен к севу рапса и озимой пшеницы. В результате планомерной работы Управления за
текущий год в Нижегородской области уже введено в сельскохозяйственный оборот 1000 га сельхозземель в Павловском, Сергачском,
Вачском, Богородском и Большемурашкинском муниципальных округах`;
