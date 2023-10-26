import React from "react";

const styles = {
  yellow: "bg-[#FBF6EB] outline outline-[0.5px] outline-[#00426947] text-[#4C4C40CC]  py-[4px] rounded-[4px] px-[12px]",
  red: "bg-[#EAF0E4] outline outline-[0.5px] outline-[#00426947] text-[#4C4C40CC]  py-[4px] rounded-[4px] px-[12px]",
};

const Button = (props) => {
  return (
    <button className={styles[props.style]} type="button">
      {props.text}
    </button>
  );
};

const Tag = (props) => {
  return <div className={styles[props.style]}>{props.text}</div>;
};

function Body(props) {
  const tag_list = {
    button: <Button {...props} />,
    div: <Tag {...props} />,
  };

  return <>{tag_list[props.type]}</>;
}

export default Body;
