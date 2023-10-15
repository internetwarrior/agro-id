import React from "react";

function LittleHeader(props) {
  return (
    <div className=" font-medium text-[#2B361E] text-[20px]">
      {props?.title}
    </div>
  );
}

export default LittleHeader;
