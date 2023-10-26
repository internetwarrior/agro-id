export const TagList = (props) => {
  const { children } = props;
  return <div className="max-w-[592px] flex flex-wrap justify-center gap-[8px]">{children}</div>;
};

export const Tag = (props) => {
  const { name, id, value } = props;
  return (
    <div
      onClick={() => {
        props.onClick(id);
      }}
      className={
        (value ? "gradient " : "bg-[#00426912] outline-[#00426947]  ") + "outline outline-[1px]  px-[12px] py-[4px] w-auto  rounded-[4px]"
      }
    >
      {name}
    </div>
  );
};
