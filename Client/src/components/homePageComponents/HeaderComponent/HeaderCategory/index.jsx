import React, { useState } from "react";
import Accardion from "./Accardion";

const HeaderCategory = () => {
  const category = [
    {
      name: "Woman’s Fashion",
      accardionItems: [
        { accardion_name: "women1" },
        { accardion_name: "women2" },
      ],
    },
    {
      name: "Men's Fashion",
      accardionItems: [
        { accardion_name: "men1" },
        { accardion_name: "men2" },
        { accardion_name: "men3" },
        { accardion_name: "men4" },
      ],
    },
    {
      name: "Electronics",
    },
    {
      name: "Sports & Outdoor",
    },
    {
      name: "Baby’s & Toys",
    },
    {
      name: "Groceries & Pets",
    },
    {
      name: "Health & Beauty",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div>
      <div className="   p-10 lg:p-0 lg:py-12 lg:pr-10 lg:border-r-2 ">
        <div className="space-y-3">
          {category &&
            category.map((item, i) => (
              <div key={i}>
                {item.accardionItems ? (
                  <Accardion
                    accardion={item}
                    index={i}
                    isOpen={openAccordion === i}
                    onAccordionClick={() => handleAccordionClick(i)}
                  />
                ) : (
                  <p>{item.name}</p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderCategory;
