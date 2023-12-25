import React from "react";
import HeaderSlide from "./HeaderSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./index.scss";

const HeaderSlider = () => {
  return (
    <div className=" ">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper header-slider"
      >
        <SwiperSlide>
          <HeaderSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
