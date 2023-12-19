import React from "react";

const SectionHeading = ({subTitle,title}) => {
  return (
    <div>
      <div className="flex items-center gap-3"> 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="40"
          viewBox="0 0 20 40"
          fill="none"
        >
          <rect width="20" height="40" rx="4" fill="#DB4444" />
        </svg>
        <p className=" text-primary font-semibold">{subTitle}</p>
      </div>
      <h2 className="text-[2.1rem] font-semibold mt-2">{title}</h2>
    </div>
  );
};

export default SectionHeading;
