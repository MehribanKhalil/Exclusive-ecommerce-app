import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionHeading from "../../CommonComponents/SectionHeading";
import Camera from "../../../assets/images/BrowseCategoryImages/Camera.svg";
import Computers from "../../../assets/images/BrowseCategoryImages/Computers.svg";
import Gaming from "../../../assets/images/BrowseCategoryImages/Gaming.svg";
import HeadPhones from "../../../assets/images/BrowseCategoryImages/HeadPhones.svg";
import Phones from "../../../assets/images/BrowseCategoryImages/Phones.svg";
import SmartWatch from "../../../assets/images/BrowseCategoryImages/SmartWatch.svg";
import BrowseCategory from "./BrowseCategory";
const BrowseCategorySection = () => {
  return (
    <section className="py-16 section_border">
      <SectionHeading title="Browse By Category" subTitle="Categories" />

      <div className="pt-8 pb-12">
        <Swiper
          loop={true}
          //   navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={6}
          spaceBetween={30}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            568:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <BrowseCategory image={Phones} title="Phones" />
          </SwiperSlide>

          <SwiperSlide>
            <BrowseCategory image={Computers} title="Computers" />
          </SwiperSlide>

          <SwiperSlide>
            <BrowseCategory image={SmartWatch} title="SmartWatch" />
          </SwiperSlide>

          <SwiperSlide>
            <BrowseCategory image={Camera} title="Camera" />
          </SwiperSlide>

          <SwiperSlide>
            <BrowseCategory image={HeadPhones} title="HeadPhones" />
          </SwiperSlide>

          <SwiperSlide>
            <BrowseCategory image={Gaming} title="Gaming" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BrowseCategorySection;
