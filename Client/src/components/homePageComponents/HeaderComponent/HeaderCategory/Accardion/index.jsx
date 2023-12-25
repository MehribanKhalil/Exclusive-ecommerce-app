import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Accardion = ({ accardion, index, isOpen, onAccordionClick }) => {
  return (
    <div>
      <>
        <p
          className="center_between cursor-pointer"
          onClick={onAccordionClick}
        >
          {accardion.name}
          <MdKeyboardArrowRight
            size={23}
            className={`${
              isOpen ? "rotate-90 custom_transition" : " custom_transition"
            } `}
          />
        </p>
        <ul
          className={` ${
            isOpen ? " max-h-[120px] " : "max-h-0 "
          } custom_transition overflow-hidden  `}
        >
          {accardion.accardionItems.map((item, i) => (
            <li key={i}>{item.accardion_name}</li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default Accardion;
