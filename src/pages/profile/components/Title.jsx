import React from "react";

function Title(props) {
  return (
    <div className=" text-[12px] uppercase text-[#195B3F] font-medium">
      {props?.title}
    </div>
  );
}

export default Title;
