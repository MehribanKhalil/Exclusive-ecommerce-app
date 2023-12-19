import React from "react";
import './index.scss'

const BrowseCategory = ({ image, title }) => {
  return (
    <div className="group  border border-gray-400 flex flex-col justify-center items-center gap-3 border_radius w-[10.625rem] h-[9.0625rem] cursor-pointer hover:text-white hover:bg-primary custom_transition hover:border-primary">
      <img src={image} className="svg-img" />
      <h3>{title}</h3>
    </div>
  );
};

export default BrowseCategory;
