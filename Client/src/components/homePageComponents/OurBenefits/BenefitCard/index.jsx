import React from "react";
import bgImg from "../../../../assets/images/OurBenefitsImages/bgCircle.svg";

const BenefitCard = ({img,title,info}) => {
  return (
    <div className="center flex-col text-center space-y-4">
      <div className=" relative">
        <img src={bgImg} alt="" />
        <img src={img} alt="" className=" absolute left-5 top-5" />
      </div>
      <div>
        <h3 className="text-[20px] font-semibold">{title}</h3>
        <p className="text-[14px]">{info}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
