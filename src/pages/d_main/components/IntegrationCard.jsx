import React from "react";

function IntegrationCard(props) {
  return (
    <div className=" h-[160px] shadow-lg bg-[#EAF0E4] rounded-[8px] flex items-center justify-center">
      <img src={props?.img} alt="" className="p-[20px]" />
    </div>
  );
}

export default IntegrationCard;
