import React from "react";
import { MdOutlineStar, MdStarHalf, MdStar } from "react-icons/md";
import { FaTruck } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { MdRestartAlt } from "react-icons/md";
import Button from "../../CommonComponents/button";

const ProductInfo = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h2 className=" text-[1.5rem] font-semibold">Havic HV G-92 Gamepad</h2>
        <div className="flex items-center py-5">
          <div className="flex items-center gap-1">
            <span className=" flex text-yellow-400">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </span>
            <span className="text-gray-400 text-[0.87rem]">(150 Reviews)</span>
            <span className="mx-2">|</span>
            <span className=" text-green_color">In Stock</span>
          </div>
        </div>
      </div>
      <div className=" space-y-2">
        <span className="text-[1.5rem]">$192.00</span>
        <p>
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
      </div>

      <span className=" h-[1px] bg-slate-500 my-4"></span>

      <div className=" flex item-center gap-6 pb-8">
        <h5 className="text-[1.25rem]">Colours:</h5>
        <div className="flex justify-between gap-2 items-center">
          <span className="bg-blue-300 border-black rounded-full border-2 w-5 h-5 "></span>
          <span className="bg-pink-300 border-black rounded-full border-2 w-5 h-5 "></span>
        </div>
      </div>
      <div className=" flex item-center gap-6 pb-8">
        <h5 className="text-[1.25rem]">Size:</h5>
        <div className="flex justify-between gap-2 items-center">
          <button className=" custom_border w-7 h-7  hover:bg-primary hover:text-white custom_transition hover:border-primary ">XS</button>
          <button className=" custom_border w-7 h-7 hover:bg-primary hover:text-white custom_transition hover:border-primary ">S</button>
          <button className=" custom_border w-7 h-7 hover:bg-primary hover:text-white custom_transition hover:border-primary ">M</button>
          <button className="  custom_border w-7 h-7 hover:bg-primary hover:text-white custom_transition hover:border-primary ">L</button>
          <button className=" custom_border  w-7 h-7 hover:bg-primary hover:text-white custom_transition hover:border-primary ">XL</button>
        </div>
      </div>

      <div className="flex items-start md:items-center flex-col md:flex-row gap-4">
        <div className="flex items-center custom_border ">
          <button className="p-3 hover:bg-primary hover:text-white custom_transition">
            -
          </button>
          <button className="px-5 py-3 border-x border-slate-500">1</button>
          <button className="p-3 hover:bg-primary hover:text-white custom_transition">
            +
          </button>
        </div>
        <Button btnText="Buy Now" />

        <button className="custom_border custom_transition w-9 h-9 center cursor-pointer hover:bg-primary hover:text-white hover:border-white">
          <GoHeart size={25} />
        </button>
      </div>

      <div className=" py-9 flex-col">
        <div className=" flex items-center gap-5 custom_border py-3 px-4">
          <span>
            <FaTruck size={30} />
          </span>
          <div className=" space-y-3">
            <h4 className="font-semibold">Free Delivery</h4>
            <p className=" text-sm">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className=" flex items-center gap-5 custom_border py-3 px-4">
          <span>
            <MdRestartAlt size={33} />
          </span>
          <div className=" space-y-3">
            <h4 className="font-semibold">Free Delivery</h4>
            <p className=" text-sm">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
