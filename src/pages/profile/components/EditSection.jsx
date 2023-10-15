import React from "react";
import Title from "./Title";

function EditSection(props) {
  return (
    <div className="flex flex-col gap-[12px]">
      <Title title={props.title} />
      <div>
        <button type="button" onClick={props?.func} className="text-[#AFB8BC]">
          Добавьте информацию
        </button>
      </div>
    </div>
  );
}

export default EditSection;
