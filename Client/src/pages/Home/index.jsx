import React from "react";
import ContainerComponent from "../../components/CommonComponents/ContainerComponent";
import HeaderCategory from "../../components/homePageComponents/HeaderComponent/HeaderCategory";
import HeaderSlider from "../../components/homePageComponents/HeaderComponent/HeaderSlider";

const Home = () => {
  return (
   <>
    <h2>home</h2>
    <div className="grid grid-cols-2">
      <HeaderCategory/>
      <HeaderSlider/>
    </div>
   </>
  );
};

export default Home;
