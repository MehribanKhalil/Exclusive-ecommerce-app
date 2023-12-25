import React from "react";

const Button = ({ btnText, greenBtn, full, transparent,onclick }) => {
  return (
    <button
    onClick={onclick}
      className={`${
        greenBtn
          ? " bg-green_color hover:bg-green_dark"
          : transparent
          ?  "bg-transparent text-black custom_border hover:bg-gray-200"
          : "bg-primary hover:bg-primary_dark"
      } ${
        full ? "w-full" : ""
      } custom_transition text-white font-medium border_radius py-3 px-7 `}
    >
      {btnText}
    </button>
  );
};

export default Button;
