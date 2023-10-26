import React from "react";
import { Link } from "react-router-dom";

function Link_e(props) {
  const { link } = props;
  return (
    <Link to={"/" + link} className="flex justify-center py-[12px] outline outline-[#4C4C40] outline-[1px] rounded-[4px]">
      Отмена
    </Link>
  );
}

export default Link_e;
