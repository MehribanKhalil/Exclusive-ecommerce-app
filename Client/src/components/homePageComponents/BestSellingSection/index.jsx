import React from "react";
import SectionHeading from "../../CommonComponents/SectionHeading";
import Button from "../../CommonComponents/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCard from "../../CommonComponents/ProductCard";

const BestSellingSection = () => {
  return (
    <section className=" py-16 section_border">
      <div className="flex justify-between items-end">
        <SectionHeading title="Best Selling Products" subTitle="This Month" />

        <Button btnText="View All Products" />
      </div>

      <div className=" pt-8 pb-12">
        <Swiper
          loop={true}
          navigation={true}
          //   centeredSlides={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={30}
        >
          

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellingSection;
