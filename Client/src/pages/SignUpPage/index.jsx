import React from "react";
import SignUpImg from "../../assets/images/SignUpPageImages/dl.beatsnoop 1.png";
import GoogleIcon from "../../assets/images/SignUpPageImages/GoogleIcon.svg";
import Button from "../../components/CommonComponents/button";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();
  const handleLoginClick = () => {
    nav("/login");
  };
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center pt-16 pb-24">
      <div>
        <img src={SignUpImg} alt="SignUpImg" className=" w-full border_radius" />
      </div>
      <div className="section-content p-6 md:p-24 lg:p-0 lg:pr-32 space-y-9">
        <div className="content-heading text-center md:text-left">
          <h2 className=" text-[2.25rem] font-medium ">Create an account</h2>
          <p>Enter your details below</p>
        </div>
        <form action="" className=" space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="block  w-full py-2  outline-none border-b border-gray-500  "
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="block   py-2 w-full  outline-none border-b border-gray-500 "
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="block   py-2 w-full  outline-none border-b border-gray-500 "
          />
        </form>
        <Button btnText="Create Account" full />
        <div className="center">
        <button className="center border_radius border border-gray_text w-full py-3 px-7 gap-3"> <img src={GoogleIcon} alt="" /> Sign up with Google</button>
        </div>

        <div className="flex items-center gap-3 justify-center opacity-[0.7]">
          <p>Already have account?</p>
          <button
            onClick={handleLoginClick}
            className=" font-medium border-b border-gray-500"
          >
            Log in
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
