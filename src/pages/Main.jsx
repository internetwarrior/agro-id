import React, { useRef, useState } from "react";

function Main(props) {
  const [data, setData] = useState("Hello");
  return (
    <div>
      <div>{data}</div>
      <button
        onClick={() => {
          setData((prev) => <h1 className=" text-3xl">{props?.hey}</h1>);
        }}
      >
        Нажми
      </button>
    </div>
  );
}

export default Main;
