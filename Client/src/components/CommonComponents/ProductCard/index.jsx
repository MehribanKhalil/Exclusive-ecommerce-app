import React from "react";
import { MdOutlineStar, MdStarHalf, MdStar } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { FiEye } from "react-icons/fi";

const ProductCard = ({ wishlistCard, recommendedCard, isNew, onSale,rating }) => {
  return (
    <div>
      <div className=" relative">
        <div className="">
          <img
            src="https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1703462400&Signature=iDmVsv8GQsUE0RG1KvOewBnDWr0c4ksCfi6opYDbkxeJdfwZcNohOHMpoc9Jin6HQGBdO8ZAtzp4i0iAEs56j0Hkcbc6slb0VAcun9eWnXsSnt5fSG9B~Cpm6I5cg4crqV5cNKlmuUhIeD3Ol~CBUjBd4U6VXFSm7FI2kz3DoWAB9XN~I7tR4-Eva5Hr6oG9IldshxVM94OwcEuQ-sRWI9AxD3yJXgzJbDvYiF-sWHhrCOnktfoSrToc2jJ454Pk1JTpM5Q1Nq4sLHZnP~SGSpcNwNuowWUwFbQBXQOu0EYwTNSsKz9GTzB4RKftIiLCfEtr9k3-I6oIYAm9HB-tuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className=" bg-secondary  p-12"
          />
        </div>
        {wishlistCard ? (
          <button className="bg-white rounded-full p-2 absolute top-4 right-4 ">
            <IoTrashOutline size={23} />
          </button>
        ) : recommendedCard ? (
          <button className="bg-white rounded-full p-2 absolute top-4 right-4">
            <FiEye size={20} />
          </button>
        ) : (
          <div className=" absolute top-4 right-4 flex flex-col gap-2 ">
            <button className="bg-white rounded-full p-2">
              <GoHeart size={20} />
            </button>
            <button className="bg-white rounded-full p-2">
              <FiEye size={20} />
            </button>
          </div>
        )}

        {isNew ? (
          <div className="absolute top-4 left-4 bg-primary border_radius text-white text-[0.75rem] px-2 py-1">
            <span>NEW</span>{" "}
          </div>
        ) : onSale ? (
          <div className="absolute top-4 left-4 bg-primary border_radius text-white text-[0.75rem] px-2 py-1">
            <span>-40%</span>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className=" space-y-1">
        <h4 className="font-semibold">HAVIT HV-G92 Gamepad</h4>
        <div className="flex gap-2">
          <span className=" font-medium text-primary">$120</span>
          <span className=" text-gray-400 line-through">$160</span>
        </div>
        <div>
          {
            rating ?
            <div className="flex items-center gap-2">
            <span className="inline-flex  text-yellow-400">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </span>
            <span className="text-gray-400 text-[0.87rem]">(88)</span>
          </div>
          :
          ''
          }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
