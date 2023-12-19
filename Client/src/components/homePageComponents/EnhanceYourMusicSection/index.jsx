import React from "react";
import JBL from "../../../assets/images/YourMusicImages/JBL.png";
import Button from "../../CommonComponents/button";
import "./index.scss";
const EnhanceYourMusic = () => {
  return (
    <section className="flex justify-between items-center bg-black text-white p-12 pb-5 ">
      <div className="space-y-7 p-5">
        <p className=" text-green_color font-semibold">Categories</p>
        <h2 className="font-semibold">Enhance Your Music Experience</h2>
        <div className="flex gap-4">
          <div className="rounded_timer">
            <span className=" font-semibold">23</span>
            <span className="text-[0.6rem]">Hours</span>
          </div>
          <div className="rounded_timer">
            <span className=" font-semibold">05</span>
            <span className="text-[0.6rem]">Days</span>
          </div>
          <div className="rounded_timer">
            <span className=" font-semibold">59</span>
            <span className="text-[0.6rem]">Minutes</span>
          </div>
          <div className="rounded_timer">
            <span className=" font-semibold">35</span>
            <span className="text-[0.6rem]">Seconds</span>
          </div>
        </div>
        <Button btnText="Buy Now!" greenBtn />
      </div>
      <div className="center ">
        <img src={JBL} alt="" className="max-w-[35.5rem]" />
      </div>
    </section>
  );
};

export default EnhanceYourMusic;
