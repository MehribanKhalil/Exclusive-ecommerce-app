import React from "react";
import SectionHeading from "../../CommonComponents/SectionHeading";
import Button from "../../CommonComponents/button";
import ProductCard from "../../CommonComponents/ProductCard";

const OurProductsSection = () => {
  return (
    <section className=" py-16 section_border">
      <SectionHeading title="Explore Our Products" subTitle="Our Products" />

      <div className=" pt-8 pb-12  gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className=" text-center">
        <Button btnText="View All Products" />
      </div>
    </section>
  );
};

export default OurProductsSection;
