import React from "react";
import SVG from "../../../static/svg/edit_button_icon.svg";
import { Link } from "react-router-dom";

function EditButton(props) {
  return (
    <Link className="bg-black bg-opacity-[8%] rounded-[8px]" to={"create-edit/" + props.link}>
      <div className="p-[12px] w-auto  ">
        <img src={SVG} alt="" srcSet="" />
      </div>
    </Link>
  );
}

export default EditButton;
