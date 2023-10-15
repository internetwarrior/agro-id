import React, { useState } from "react";

function Input(props) {
  const [data, setData] = useState("");
  return (
    <input
      name={props.name}
      type="text"
      value={data}
      onChange={(e) => {
        setData(e.target.value);
      }}
      placeholder={props.placeholder}
      className=" text-[16px] p-[13px] rounded-[4px] border-solid border-2 input-border w-full"
    />
  );
}

export default Input;
