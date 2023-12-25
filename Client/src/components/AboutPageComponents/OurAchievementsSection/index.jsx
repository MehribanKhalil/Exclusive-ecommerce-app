import React from "react";
import { BsShop } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import OurAchievement from "./OurAchievement";
import { FaSackDollar } from "react-icons/fa6";

const OurAchievementsSection = () => {
  return (
    <section id="our-achievements" className="wrapper gap-6 lg:gap-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
     
     <OurAchievement icon={<BsShop size={29} />}/>
     <OurAchievement icon={<AiOutlineDollarCircle size={39} />}/>
     <OurAchievement icon={<GiShoppingBag size={29} />} />
     <OurAchievement icon={<FaSackDollar size={29} />}/>

    </section>
  );
};

export default OurAchievementsSection;
