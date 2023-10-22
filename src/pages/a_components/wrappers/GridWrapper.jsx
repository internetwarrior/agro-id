import React from "react";

function GridWrapper(props) {
  return (
    <div className={`flex overflow-x-scroll xl:overflow-visible xl:grid grid-cols-4 gap-[16px] pt-[24px]    ${props?.className}`}>
      {props.children}
    </div>
  );
}

export default GridWrapper;
