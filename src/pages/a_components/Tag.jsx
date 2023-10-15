import React from "react";

function Tag(props) {
  return (
    <button
      className={
        (props.active
          ? "bg-[#00426912] rounded-[4px] outline outline-[1px] outline-[#00426947] "
          : "tag-style ") + "mt-[8px] ml-[8px]  px-[12px] py-[4px] w-auto "
      }
    >
      {props?.title}
    </button>
  );
}

export default Tag;
