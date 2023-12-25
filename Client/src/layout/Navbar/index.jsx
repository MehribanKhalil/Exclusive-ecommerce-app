import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMiniBars3 } from "react-icons/hi2";
import userLogo from "../../assets/images/NavbarImages/user.svg";
import "./index.scss";
import NavbarMobile from "../../components/NavbarComponents/NavbarMobile";
import Dropdown from "../../components/NavbarComponents/Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleOpenSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown =()=>{
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div id="navbar" className="sticky top-0 z-50 section_border">
      <div className="flex items-center justify-between pt-5 pb-3 wrapper">
        <div>
          <NavLink to={"/"}>
            <h2 className="font-bold tracking-wide text-[25px]">Exclusive</h2>
          </NavLink>
        </div>

        <div className="lg:flex gap-8 hidden">
          <NavLink className="" to={"/"}>
            Home
          </NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/signUp"}>Sign Up</NavLink>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          <div className="search_inp  sm:bg-secondary">
            <input
              type="text"
              className=" bg-secondary hidden sm:block "
              placeholder="What are you looking for?"
            />
            <IoSearch className="search_icon" size={24} />
          </div>
          <NavLink to={"/wishlist"} className="center">
            <button>
              <GoHeart size={24} />
            </button>
          </NavLink>
          <NavLink to={"/cart"} className="center relative pr-1">
            <button>
              <AiOutlineShoppingCart size={24} />
            </button>
            <span className=" absolute -top-1 -right-1 bg-primary w-4 h-4 center text-white rounded-full text-sm">
              1
            </span>
          </NavLink>
          <div className=" relative"  onClick={handleDropdown}>
            <div className="w-8 hidden sm:block  cursor-pointer">
              <img src={userLogo} alt="user" className=" w-full" />
            </div>
            <Dropdown isDropdownOpen={isDropdownOpen} />
          </div>

          <button>
            <HiMiniBars3 className="lg:hidden" size={24} />
          </button>
        </div>
      </div>

      <NavbarMobile isOpen={isOpen} handleOpenSidebar={handleOpenSidebar} />
    </div>
  );
};

export default Navbar;
