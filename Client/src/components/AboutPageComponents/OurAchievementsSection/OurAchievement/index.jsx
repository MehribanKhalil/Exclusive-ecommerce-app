import React from "react";
import bgImg from "../../../../assets/images/OurBenefitsImages/bgCircle.svg";

const OurAchievement = ({ icon }) => {
  return (
    <div className="group hover:bg-primary cursor-pointer custom_transition custom_border flex flex-col items-center px-6 py-5 space-y-2">
      <div className=" relative">
        <img src={bgImg} className=" w-18 h-18" />
        <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white ">
          {icon}
        </div>
      </div>
      <h4 className=" group-hover:text-white custom_transition text-[2rem] font-bold">10.5k </h4>
      <p className="group-hover:text-white custom_transition">Sallers active our site</p>
    </div>
  );
};

export default OurAchievement;
