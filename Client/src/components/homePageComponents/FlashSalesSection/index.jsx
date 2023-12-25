import React from "react";
import SectionHeading from "../../CommonComponents/SectionHeading";
import Button from "../../CommonComponents/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCard from "../../CommonComponents/ProductCard";
import './index.scss'
const FlashSales = () => {
  return (
    <section className=" py-16 section_border">
     
        <SectionHeading title="Flash Sales" subTitle="Today’s" />

      <div className=" pt-8 pb-12">
        <Swiper
          loop={true}
          // navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            568:{
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          

          <SwiperSlide>
            <ProductCard rating />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard rating />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard rating />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard rating />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard rating />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard rating />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard rating />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" text-center">
        <Button btnText="View All Products" />
      </div>
    </section>
  );
};

export default FlashSales;
