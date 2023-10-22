import React, { useEffect, useState } from "react";

import ICON_DD from "../../static/svg/selector/IconArrowDown.svg";
import ICON_CLOSE from "../../static/svg/selector/IconClose.svg";

const Selector = (props) => {
  const childrenArray = React.Children.toArray(props.children);

  const [options, setOptions] = useState([]);
  const [icon, setIcon] = useState(0);

  const values = childrenArray.map((child) => {
    if (child.props) {
      return { ...child.props, ...(child.props?.value ? true : false) };
    }
    return null;
  });

  useEffect(() => {
    setOptions(values);
    // document.addEventListener("click", printMousePos);
    // console.clear();
  }, []);

  useEffect(() => {
    props?.onChange(options);
    setIcon(options.filter((option) => option.value === true).length);
  }, [options]);

  const [toggSelec, setToggSelec] = useState(false);
  const toggle = () => {
    setToggSelec((prev) => !prev);
  };

  const toggleOption = (index) => {
    setOptions((prev) => {
      const data = [
        ...prev.map((val) => {
          return val.index === index ? { ...val, ...{ value: !val.value } } : val;
        }),
      ];

      return data;
    });
  };

  const cleanAll = () => {
    setOptions((prev) => [...prev.map((val) => ({ ...val, ...{ value: false } }))]);
  };

  return (
    <div
      // onBlur={(e) => {
      //   setToggSelec(false);
      // }}
      className="relative"
    >
      <button
        onClick={(e) => {
          console.log(e.target.classList);

          if (e.target.classList[0] == "dont-close" && icon) {
            return;
          }
          toggle();
        }}
        className={` outline flex gap-[10px] items-center outline-[1px] outline-[#00416633] rounded-[4px] px-[16px] ${
          icon && "gradient"
        } pr-[12px] py-[4px] ${toggSelec && "gradient"} `}
      >
        {props.placeHolder}
        <button className="" onClick={cleanAll}>
          <img
            className={`dont-close p-[4px] transform ${toggSelec && "-rotate-180"} transition-transform duration-300 ease-in-out`}
            src={icon ? ICON_CLOSE : ICON_DD}
            alt=""
          />
        </button>
      </button>
      <div
        className={` animate-fadeIn w-[210px] outline outline-[1px] outline-[#00416633] rounded-[4px] absolute top-[36px] left-0 bg-white z-50 ${
          !toggSelec && " hidden "
        }`}
      >
        {options.map((option) => {
          return (
            <>
              <ToggleSwitch
                toggle={() => {
                  toggleOption(option.index);
                }}
                icon={option.icon}
                value={option.value}
                text={option.text}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

//Toggle

const ToggleSwitch = ({ value, toggle, text, icon }, props) => {
  return (
    <label className="hey flex justify-between items-center cursor-pointer px-[12px] py-[4px] ">
      <div className=" text-gray-700 font-medium flex gap-[4px] pr-[20px]">
        <img src={icon} />
        {text}
      </div>
      <div className=" relative">
        <input type="checkbox" className="hidden" checked={value} onChange={toggle} />
        <div
          className={`toggle-path w-[28px] h-[16px] ${
            value ? "bg-[#195B3F]" : " outline outline-[1px] outline-[#B4C5CF] bg-white"
          } rounded-full shadow-inner`}
        ></div>
        <div
          className={`toggle-circle left-[2px]   absolute w-[12px] h-[12px] rounded-full shadow-md transform transition-transform duration-300 ${
            value ? "translate-x-[12px] bg-white " : "bg-[#B4C5CF]"
          } top-[50%] -translate-y-[50%]`}
        ></div>
      </div>
    </label>
  );
};

export const Option = (props) => {
  return <></>;
};

export default Selector;
