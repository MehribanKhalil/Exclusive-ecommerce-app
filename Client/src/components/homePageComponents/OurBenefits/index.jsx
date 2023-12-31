import React from "react";
import guarantee from "../../../assets/images/OurBenefitsImages/guarantee.svg";
import delivery from "../../../assets/images/OurBenefitsImages/delivery.svg";
import service from "../../../assets/images/OurBenefitsImages/service.svg";
import BenefitCard from "./BenefitCard";
const OurBenefits = ({wrapper}) => {
  return (
    <section className={`${wrapper && 'wrapper' } grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-3  py-24`}>
      <BenefitCard
        img={delivery}
        title="FREE AND FAST DELIVERY"
        info="Free delivery for all orders over $140"
      />

      <BenefitCard
        img={service}
        title="24/7 CUSTOMER SERVICE"
        info="Friendly 24/7 customer support"
      />

      <BenefitCard
        img={guarantee}
        title="MONEY BACK GUARANTEE"
        info="We reurn money within 30 days"
      />
    </section>
  );
};

export default OurBenefits;
