import React from "react";
import icon from "../../static/selectIcons/IconArrowRight.svg";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export function AccordionPart() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading >
          <AccordionItemButton>Сельское хозяйство</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <AccordionItemHeading>
            <AccordionItemButton>
              Сельское хозяйство kkkkkkk
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItemPanel>
        <AccordionItemPanel>
          <AccordionItemHeading>
            <AccordionItemButton>
              Сельское хозяйство kkkkkkk jjjjjjjjj
            </AccordionItemButton>
          </AccordionItemHeading>
        </AccordionItemPanel>
        <AccordionItemPanel>
          <p className="flex items-center gap-2">
            <img src={icon} alt="" />
            In ad velit in ex nostrud dolore cupidatat consectetur
          </p>
        </AccordionItemPanel>
        <AccordionItemPanel>
          <p className="flex items-center gap-2">
            <img src={icon} alt="" />
            In ad velit in ex nostrud dolore cupidatat consectetur
          </p>
        </AccordionItemPanel>
        <AccordionItemPanel>
          <p className="flex items-center gap-2">
            <img src={icon} alt="" />
            In ad velit in ex nostrud dolore cupidatat consectetur
          </p>
        </AccordionItemPanel>
        <AccordionItemPanel>
          <p className="flex items-center gap-2">
            <img src={icon} alt="" />
            In ad velit in ex nostrud dolore cupidatat consectetur
          </p>
        </AccordionItemPanel>
        <AccordionItemPanel>
          <p className="flex items-center gap-2">
            <img src={icon} alt="" />
            In ad velit in ex nostrud dolore cupidatat consectetur
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            01 Растениеводство и животноводство, охота и предоставление
            соответствующих услуг в этих областях{" "}
          </AccordionItemButton>
        </AccordionItemHeading>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            01 Растениеводство и животноводство, охота и предоставление
            соответствующих услуг в этих областях{" "}
          </AccordionItemButton>
        </AccordionItemHeading>
      </AccordionItem>
    </Accordion>
  );
}
export default AccordionPart;
