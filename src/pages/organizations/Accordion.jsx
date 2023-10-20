import React from "react";
import icon from "../../static/svg/IconArrowRight4.svg";
import iconUp from "../../static/svg/arrowUpsvg.svg";
import scss from ".././d_main/components/Main.module.scss";

const Accordion = () => {
  return (
    <div className={scss.contayner}>
      <div className="flex gap-2">
        <p>Сельское хозяйство</p>
        <img src={iconUp} alt="" />
      </div>

      <ul>
        <div className="flex gap-2">
          <img src={iconUp} alt="" />
          <p>
            01 Растениеводство и животноводство, охота и предоставление
            соответствующих услуг в этих областях
          </p>
        </div>
        <li>
          {" "}
          <img src={icon} alt="" />
          <p>
            01 Растениеводство и животноводство, охота и предоставление
            соответствующих услуг в этих областях
          </p>
        </li>
        <li>
          {" "}
          <img src={icon} alt="" />
          <p>
            01 Растениеводство и животноводство, охота и предоставление
            соответствующих услуг в этих областях
          </p>
        </li>
        <li>
          {" "}
          <img src={icon} alt="" />
          <p>
            01 Растениеводство и животноводство, охота и предоставление
            соответствующих услуг в этих областях
          </p>
        </li>
        <li>
          {" "}
          <img src={icon} alt="" />
          <p>
            01 Растениеводство и животноводство, охота и предоставление
            соответствующих услуг в этих областях
          </p>
        </li>
        <li>
          {" "}
          <img src={icon} alt="" />
          <p>
            01 Растениеводство и животноводство, охота и предоставление
            соответствующих услуг в этих областях
          </p>
        </li>
        <li>
          {" "}
          <img src={icon} alt="" />
          <p>
            01 Растениеводство и животноводство, охота и предоставление
            соответствующих услуг в этих областях
          </p>
        </li>
        <div className="flex gap-2">
          <img src={icon} alt="" />

          <p>02 Лесоводство и лесозаготовки</p>
        </div>
      </ul>
      <div className="flex gap-2">
        <img src={icon} alt="" />

        <p>02 Лесоводство и лесозаготовки</p>
      </div>
      <div className="flex items-center gap-2">
        <p>Остальное</p>
        <img src={iconUp} alt="" />
      </div>
    </div>
  );
};

export default Accordion;
