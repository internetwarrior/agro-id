import React from "react";

function CheckInput(props) {
  return (
    <div className=" flex justify-center gap-[12px]">
      <input type="checkbox" name="check" id="chec" />
      <label htmlFor="check">{props.label}</label>
    </div>
  );
}

export default CheckInput;
