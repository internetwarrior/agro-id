import React from "react";

function SliceWrapper(props) {
  return <div className={` max-w-[1280px] w-full px-[20px] mx-auto mt-[30px] ${props?.className}`}>{props.children}</div>;
}

export default SliceWrapper;
