import React from "react";

function DateInput(props) {
  return (
    <div className="flex  w-full items-center">
      <label htmlFor="date" className="date-input flex-grow">
        {props.label}
      </label>
      <input
        type="date"
        name="date"
        id="date"
        className=" p-[8px] outline outline-[1px] outline-[#33474647] rounded-[4px] flex-grow date-input"
      />
    </div>
  );
}

export default DateInput;
