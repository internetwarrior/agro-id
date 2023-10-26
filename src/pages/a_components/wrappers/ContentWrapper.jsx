import React from "react";

function ContentWrapper(props) {
  return (
    <main className="w-full  min-h-[100vh] bg-[#FAF8F6]">
      <div className="  w-full  mb-[200px] flex items-center flex-col ">{props.children}</div>
    </main>
  );
}

export default ContentWrapper;
