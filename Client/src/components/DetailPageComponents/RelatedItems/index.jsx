import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProductCard from "../../../components/CommonComponents/ProductCard";
import SectionHeading from "../../CommonComponents/SectionHeading";
const RelatedItems = () => {
  return (
    <section className="py-16 space-y-10">
      <SectionHeading title="Detail Page" subTitle="Related Item" />
      
      <Swiper
        loop={true}
        className="mySwiper"
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          568: {
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
    </section>
  );
};

export default RelatedItems;
