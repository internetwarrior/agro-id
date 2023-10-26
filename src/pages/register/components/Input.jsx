import React, { useState } from "react";

function Input(props) {
  const { name, placeholder } = props;

  const [data, setData] = useState("");

  return (
    <input
      name={name}
      type="text"
      value={data}
      onChange={(e) => {
        setData(e.target.value);
      }}
      placeholder={placeholder}
      className=" text-[16px] p-[8px] rounded-[4px] outline outline-[1px] outline-[#33474647]  w-full"
    />
  );
}

export default Input;
