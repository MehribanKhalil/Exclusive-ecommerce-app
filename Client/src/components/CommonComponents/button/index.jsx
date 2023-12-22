import React from "react";

const Button = ({ btnText, greenBtn, full }) => {
  return (
    <button
      className={`${
        greenBtn
          ? " bg-green_color hover:bg-green_dark"
          : "bg-primary hover:bg-primary_dark "
      } ${
        full ? "w-full" : ""
      } custom_transition text-white  font-medium border_radius py-3 px-7 `}
    >
      {btnText}
    </button>
  );
};

export default Button;
