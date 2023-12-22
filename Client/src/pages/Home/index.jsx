import React from "react";
import ContainerComponent from "../../components/CommonComponents/ContainerComponent";
import HeaderCategory from "../../components/homePageComponents/HeaderComponent/HeaderCategory";
import HeaderSlider from "../../components/homePageComponents/HeaderComponent/HeaderSlider";
import Button from "../../components/CommonComponents/button";
import SectionHeading from "../../components/CommonComponents/SectionHeading";
import FlashSales from "../../components/homePageComponents/FlashSalesSection";
import BrowseCategorySection from "../../components/homePageComponents/BrowseCategorySection";
import BestSellingSection from "../../components/homePageComponents/BestSellingSection";
import EnhanceYourMusic from "../../components/homePageComponents/EnhanceYourMusicSection";
import OurProductsSection from "../../components/homePageComponents/OurProductsSection";
import OurBenefits from "../../components/homePageComponents/OurBenefits";
import NewArrival from "../../components/homePageComponents/NewArrivalSection";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="grid grid-cols-4 gap-3">
        <HeaderCategory />
        <div className=" col-span-3 px-8 ">
          <HeaderSlider />
        </div>
      </div>
      <FlashSales/>
      <BrowseCategorySection/>
      <BestSellingSection/>
      <EnhanceYourMusic/>
      <OurProductsSection/>
      <NewArrival/>
      <OurBenefits/>
    </div>
  );
};

export default Home;
