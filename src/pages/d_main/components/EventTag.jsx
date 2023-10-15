import React from "react";

function EventTag(props) {
  return (
    <button className="px-[12px] py-[9px] event-tag text-[12px] text-[#4C4C40] lowercase mr-[8px] mb-[8px]">
      #{props.name}
    </button>
  );
}

export default EventTag;
