import React from "react";
import SectionHeading from "../../CommonComponents/SectionHeading";
import Button from "../../CommonComponents/button";
import ProductCard from "../../CommonComponents/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const OurProductsSection = () => {
  return (
    <section className=" py-16 section_border">
      <SectionHeading title="Explore Our Products" subTitle="Our Products" />

      <div className=" pt-8 pb-12 space-y-10">
      <Swiper
          loop={true}
          // navigation={true}
          //   centeredSlides={true}
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
        
        <Swiper
          loop={true}
          // navigation={true}
          //   centeredSlides={true}
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

export default OurProductsSection;
