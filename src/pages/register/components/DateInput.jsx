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
        className=" p-[10.5px] border-solid border-2 input-border rounded-[4px] flex-grow date-input"
      />
    </div>
  );
}

export default DateInput;
