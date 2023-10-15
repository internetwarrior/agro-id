import React from "react";
import EventTag from "./EventTag";

function EventCard(props) {
  return (
    <div
      className={
        `p-[24px] flex flex-col gap-[16px] min-h-[188px] event-grad shadow-lg rounded-[8px]` +
        (props.small ? " col-span-3" : " col-span-2")
      }
    >
      <h3 className=" text-[#2B361E] font-medium text-[20px] ">
        Сельское хозяйство
      </h3>
      <div className=" max-w-[70%]  ">
        <EventTag name="Приawdwaвет" />
        <EventTag name="Привет" />
        <EventTag name="Приawвет" />
        <EventTag name="dwadwawdПривет" />
      </div>

      <div className=" text-[#1C754F] text-[12px] font-medium uppercase">
        30 событий
      </div>
    </div>
  );
}

export default EventCard;
