import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Button from "../a_components/Button";
import { toggle } from "../../features/popus/popupSlice";

function Popup() {
  const { title, popupFunc, message, visible, buttonTitle } = useSelector(
    (state) => state.popup
  );
  const dispatch = useDispatch();

  return (
    visible && (
      <div
        onClick={(e) => {
          if (e.target.classList[0] !== "popup") {
            return;
          }
          dispatch(toggle());
        }}
        className=" popup fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]"
      >
        <div className="smooth-animation absolute p-[44px] rounded-[8px] bg-[#FAF8F6] flex items-center justify-center flex-col gap-[32px] ">
          <div className=" text-[#195B3F] text-[24px] font-bold">{title}</div>
          <div className="max-w-[500px] text-center text-[#2B361E]">
            {message}
          </div>
          <Button
            func={() => {
              popupFunc();
              dispatch(toggle());
            }}
            title={buttonTitle}
          />
        </div>
      </div>
    )
  );
}

export default Popup;
