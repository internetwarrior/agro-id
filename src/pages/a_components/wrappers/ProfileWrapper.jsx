import React from "react";

function ProfileWrapper(props) {
  return (
    <div
      className={`  w-full  mx-auto mt-[20px] p-[16px] rounded-[8px] shadow-lg bg-[#FAF8F6] flex flex-col gap-[36px] ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default ProfileWrapper;
