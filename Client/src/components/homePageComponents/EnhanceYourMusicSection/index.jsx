import React from "react";
import JBL from "../../../assets/images/YourMusicImages/JBL.png";
import Button from "../../CommonComponents/button";
import "./index.scss";
const EnhanceYourMusic = () => {
  return (
    <section id="music-section">
      <div className="flex justify-between flex-col lg:flex-row items-center bg-black text-white p-12 pb-5 ">
        <div className="left-side space-y-7 p-5">
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

        <div className="right-side  relative">
          <div className="main-product-img  flex justify-center">
            <img src={JBL} alt="MainProduct" className=" z-20" />
          </div>
          <div className="rounded-full w-full h-[320px] absolute top-0 right-[-5] opacity-25 bg-white  blur-[80px] filter circle "></div>
        </div>
      </div>
    </section>
  );
};

export default EnhanceYourMusic;
