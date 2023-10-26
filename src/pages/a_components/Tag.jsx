import React from "react";

function Tag(props) {
  return (
    <button
      className={
        (props.active ? "tag-style " : "bg-[#00426912] rounded-[4px] outline outline-[1px] outline-[#00426947] ") +
        "px-[12px] py-[4px] w-auto "
      }
    >
      {props?.title}
      {props?.text}
    </button>
  );
}

export default Tag;
