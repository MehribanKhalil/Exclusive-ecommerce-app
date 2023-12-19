import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
  return (
    <footer className=" bg-black text-white">
      <div className=" pt-24 pb-20 wrapper grid grid-cols-8 gap-7">
        <div className=" col-span-2 space-y-3">
          <h3 className=" font-bold text-3xl">Exclusive</h3>
          <h4 className="text-[23px] py-6">Subscribe</h4>
          <p>Get 10% off your first order</p>
          <div>
            <input type="text" />
          </div>
        </div>

        <div className=" col-span-2 space-y-3">
          <h4 className="text-[23px]">Support</h4>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="space-y-3">
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

        <div className="space-y-3">
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

        <div className=" col-span-2 ">
          <h4 className="text-[23px]">Download App</h4>
          <p className=" text-[14px] text-gray_text ">Save $3 with App New User Only</p>
          <div>
            {/* <div>
            <img src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1704067200&Signature=hf2OfffRJ0Lf3zXK4JfrObhSieZEK5CHxgTSBqMSoZHiRMijoaJQTQ2G51jhx70Jk7RSGSix6UutDS1hsFpFrGds6LhFcnEbxbVRT3xJ7ttal-aaT~dVw1n-3FjKuYsraFL~~z7SXSZRfdRb2NXaBD6xbIaxiw-LOvykTx0Wxwlv7UXl~SBSG20VTa-OR-H1xJtz0ZE9FBlRch4MMMcemYGu18VLsWlaXMb1~UYlG5wWOFqv4Fo29FbVjAWwLKldFeCb76QdcLLz9Nj6gjETFNP5Gv5Bk46uDYo3i3m8MjMkKyOz8KSUiehxdujxU5RrQy3Mtymi9f1gy0WJYSBONg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div>
              <div>
                <img src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1704067200&Signature=l0~5JSQdj-rVNNWv81m8fVDpNvkRSZVsDZBzX8GUHn2UL61AKH0QzpUOHUuFY2kZA8krrx0l1HfJlrhfTXvi2KMCcN59Cqmmo23FM~nrJia6PEBrcb9Kv4Cz5wbkxTLVAvuSfQG3PFCr~LBeB5xAvjPzVems6rhMJMvh1~Li7HshKm0oYYMOrSkrF2lFTXfGjnuOYPJHwxQlY6Io9aMHqrGUaNmoEmKJU-X7gjqHjv78ElsS1WkRP64X4JA2C0r02~csm4ZVF23w0I3gM~4RRFpxTizNaIOjkR7nLlHoBknfuT-N6s37GCoZJ6A1iGnmiukO~WvUMYMoGVTR0Vr8Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <img src="https://s3-alpha-sig.figma.com/img/3893/2d5a/ccb54c528f9bcf326ca48ea29bd6d890?Expires=1704067200&Signature=TliNm0-~pHhKzFUzg1ZMJu17QsFeE7jer-Uxx0Xl6PJZ4DxRJ4yguPdZa6beoj9gQkmzkAqH9140C3YjGxUq91EM~zOrOAdbXNBbiKlky7-w8Rj-90BQH87kaFi6EFKerlEfdLOLWMz834QsPfiaQ5eyxYIkhHGdgXeZr19Vmw8oRktBjbkE1R1lbyMnrnKlUws6y38pWSD2jjD8nuLU-QubrNc-Q1akCB4DhJhjLUImGf19F4SMAeJbjNu4hwm3yINS-FNVJB4TBnpns0iuO2yH8wUBxEa37218SHMpxVpiL3BVfDpfMdTUb6hHkl1Qpzj7JrXFcKd0WSXD6Rsj6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
            </div> */}
          </div>
          <div className="flex gap-10">
          <button><TiSocialFacebook size={30} /></button>
          <button><FaXTwitter size={22} /></button>
          <button><FaInstagram size={22} /></button>
          <button><GrLinkedinOption size={22} /></button>
          </div>
        </div>
      </div>
      <div className="center gap-2  text-gray_text py-4 border-t border-gray_text">
        <FaRegCopyright />
        <p >Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
