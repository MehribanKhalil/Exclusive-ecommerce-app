import React from "react";
import Button from "../../components/CommonComponents/Button";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProductCard from "../../components/CommonComponents/ProductCard";
import SectionHeading from "../../components/CommonComponents/SectionHeading";

const WishlistPage = () => {
  return (
    <div className="wrapper">
      <div className="wishlist-heading flex justify-between items-center py-16">
        <h3 className=" text-[20px] font-medium">Wishlist (4)</h3>
        <Button btnText="Move All To Bag" transparent />
      </div>

      <div className="wishlist-products pb-14">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            gap:20,
            pagination: true,
            arrows: false,
          }}
        >
          <SplideSlide>
            
            <ProductCard wishlistCard  />
          </SplideSlide>
          <SplideSlide>
            <ProductCard wishlistCard  />
          </SplideSlide>
          <SplideSlide>
            <ProductCard wishlistCard  />
          </SplideSlide>
          <SplideSlide>
            <ProductCard wishlistCard  />
          </SplideSlide>
          <SplideSlide>
            <ProductCard wishlistCard  />
          </SplideSlide>
          <SplideSlide>
            <ProductCard wishlistCard  />
          </SplideSlide>
          <SplideSlide>
            <ProductCard wishlistCard  />
          </SplideSlide>
          <SplideSlide>
            <ProductCard wishlistCard  />
          </SplideSlide>
          <SplideSlide>
            <ProductCard wishlistCard  />
          </SplideSlide>
        </Splide>
      </div>

      <div className="recommended-products py-10">
        <div className="flex items-center justify-between">
          <SectionHeading subTitle="Just For You" title="Just For You" />
          <Button btnText="See All" transparent />
        </div>
        <div className="py-10">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            gap:20,
            pagination: true,
            arrows: false,
          }}
        >
          <SplideSlide>
            
            <ProductCard recommendedCard rating />
          </SplideSlide>
          <SplideSlide>
            <ProductCard recommendedCard  rating />
          </SplideSlide>
          <SplideSlide>
            <ProductCard recommendedCard rating />
          </SplideSlide>
          <SplideSlide>
            <ProductCard recommendedCard rating />
          </SplideSlide>
          <SplideSlide> 
            <ProductCard recommendedCard rating/>
          </SplideSlide>
          <SplideSlide>
            <ProductCard recommendedCard rating />
          </SplideSlide>
          <SplideSlide>
            <ProductCard recommendedCard rating/>
          </SplideSlide>
          <SplideSlide>
            <ProductCard recommendedCard  rating/>
          </SplideSlide>
          <SplideSlide>
            <ProductCard recommendedCard rating />
          </SplideSlide>
        </Splide>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
