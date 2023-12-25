import React from "react";
import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoBagHandleSharp } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineStar } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './index.scss'

const Dropdown = ({isDropdownOpen}) => {
  return (
    <div
      id={`${isDropdownOpen ? "dropdown" :''}`}
      className={`${
        isDropdownOpen
          ? " max-h-[600px] custom_transition"
          : "h-0 max-h-0 overflow-hidden "
      } text-white space-y-2 w-[250px] absolute right-0 top-9 border_radius p-3 `}
    >
      <NavLink className='flex items-center gap-3'>
        <FiUser size={24} />
        <p>Manage My Account</p>
      </NavLink>
      <NavLink className='flex items-center gap-3'>
        <IoBagHandleSharp  size={24} />
        <p>My Order</p>
      </NavLink>
      <NavLink className='flex items-center gap-3'>
        <IoIosCloseCircleOutline size={24} />
        <p>My Cancellations</p>
      </NavLink>
      <NavLink className='flex items-center gap-3'>
        <MdOutlineStar  size={24} />
        <p>My Reviews</p>
      </NavLink>
      <NavLink className='flex items-center gap-3'>
        <BiLogOut  size={24} />
        <p>Logout</p>
      </NavLink>
    </div>
  );
};

export default Dropdown;
