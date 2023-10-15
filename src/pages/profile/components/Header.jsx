import React from "react";
import EditButton from "./EditButton";

function Header(props) {
  return (
    <div className=" flex justify-between">
      <h5 className="text-[#195B3F] text-[24px] font-semibold">
        {props?.title}
      </h5>
      {<EditButton link={props?.link} />}
    </div>
  );
}

export default Header;
