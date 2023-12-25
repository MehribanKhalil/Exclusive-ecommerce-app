import React from "react";
import RelatedItems from "../../components/DetailPageComponents/RelatedItems";
import ProductImages from "../../components/DetailPageComponents/ProductImages";
import ProductInfo from "../../components/DetailPageComponents/ProductInfo";

const DetailPage = () => {
  return (
    <section id="detail-page" className="wrapper py-14">
      <div className="product grid items-start grid-cols-1 lg:grid-cols-3 gap-16  lg:gap-20 xl:gap-18">
       <div className="lg:col-span-2 ">
       <ProductImages />
       </div>
        <ProductInfo />
      </div>
      <RelatedItems />
    </section>
  );
};

export default DetailPage;
