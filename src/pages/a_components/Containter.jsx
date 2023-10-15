import React from "react";

function Containter(props) {
  return (
    <main className=" w-full min-h-[100vh] flex justify-center">
      <div className="  w-full  mb-[200px] flex items-center flex-col ">
        {props?.element}
      </div>
    </main>
  );
}

export default Containter;
