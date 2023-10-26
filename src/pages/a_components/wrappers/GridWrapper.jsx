import React from "react";

function GridWrapper(props) {
  return (
    <div
      className={`overflow-x-scroll xl:overflow-visible
    gap-[16px]
    pt-[24px] 
    flex
    md:grid
    sm:grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    xl:grid-cols-4 
       ${props?.className}`}
    >
      {props.children}
    </div>
  );
}

export default GridWrapper;
