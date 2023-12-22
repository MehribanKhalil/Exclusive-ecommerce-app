import React from "react";
import { FaRegCopyright, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineSend } from "react-icons/ai";
import Qrcode from "../../assets/images/FooterImages/Qrcode 1.png";
import appstore from "../../assets/images/FooterImages/download-appstore.png";
import GooglePlay from "../../assets/images/FooterImages/GooglePlay.png";

const Footer = () => {
  return (
    <footer className=" bg-black text-white">
      <div className=" pt-24 pb-20 wrapper grid  xs:grid-cols-1  md:grid-cols-3 xl:grid-cols-5  gap-7">
        <div className=" space-y-5">
          <h3 className=" font-bold text-3xl">Exclusive</h3>
          <h4 className="text-[23px] py-1">Subscribe</h4>
          <p>Get 10% off your first order</p>
          <div className="flex border border-white max-w-[210px] p-2 border_radius ">
            <input
              type="text"
              placeholder="Enter your email"
              className="max-w-[160px] bg-transparent border-none outline-none px-1"
            />
            <button>
              <AiOutlineSend size={23} className="" />
            </button>
          </div>
        </div>

        <div className="  space-y-5">
          <h4 className="text-[23px]">Support</h4>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className=" space-y-3">
          <h4 className="text-[23px] ">Account</h4>
          <p>
            <NavLink> My Account</NavLink>
          </p>
          <p>
            <NavLink> Login / Register</NavLink>
          </p>
          <p>
            <NavLink> Cart</NavLink>
          </p>
          <p>
            <NavLink>Wishlist</NavLink>
          </p>
          <p>
            <NavLink>Shop</NavLink>
          </p>
        </div>

        <div className=" space-y-4">
          <h4 className="text-[23px]">Quick Link</h4>
          <p>
            <NavLink>Privacy Policy</NavLink>
          </p>
          <p>
            <NavLink>Terms Of Use</NavLink>
          </p>
          <p>
            <NavLink>FAQ</NavLink>
          </p>
          <p>
            <NavLink>Contact</NavLink>
          </p>
        </div>

        <div className="  space-y-3">
          <h4 className="text-[23px]">Download App</h4>
          <p className=" text-[14px] text-gray_text ">
            Save $3 with App New User Only
          </p>
          <div className="flex items-center gap-2">
            <div>
              <img src={Qrcode} />
            </div>
            <div>
              <div className="flex flex-col justify-center items-center space-y-1">
                <img src={GooglePlay} />
                <img src={appstore} />
              </div>
            </div>
          </div>
          <div className="flex gap-10 pt-4">
            <button>
              <TiSocialFacebook size={30} />
            </button>
            <button>
              <FaXTwitter size={22} />
            </button>
            <button>
              <FaInstagram size={22} />
            </button>
            <button>
              <GrLinkedinOption size={22} />
            </button>
          </div>
        </div>
      </div>
      <div className="center gap-2  text-gray_text py-4 border-t border-gray_text">
        <FaRegCopyright />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
