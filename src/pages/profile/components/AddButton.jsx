import React from "react";

function AddButton(props) {
  return (
    <button onClick={props.func} type="button" className="text-[#AFB8BC]">
      Добавьте информацию
    </button>
  );
}

export default AddButton;
