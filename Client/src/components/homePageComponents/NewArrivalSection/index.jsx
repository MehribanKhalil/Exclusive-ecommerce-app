import React from "react";
import SectionHeading from "../../CommonComponents/SectionHeading";
import Playstation from "../../../assets/images/NewArrivalImages/ps5-slim-goedkope-playstation_large 1 (1).png";
import Woman from "../../../assets/images/NewArrivalImages/attractive-woman-wearing-hat-posing-black-background 1.png";
import Perfume from "../../../assets/images/NewArrivalImages/652e82cd70aa6522dd785109a455904c.png";
import Speakers from "../../../assets/images/NewArrivalImages/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import "./index.scss";

const NewArrival = () => {
  return (
    <section className="py-16">
      <SectionHeading title="New Arrival" subTitle="Featured" />

      <div className="parent gap-3 pt-7 text-white">
        <div className="playstation  relative  overflow-hidden bg-black border_radius">
          <div className=" object-cover pt-20 w-full h-full">
            <img
              src={Playstation}
              alt="Playstation"
              className=" object-contain w-full h-full "
            />
          </div>
          <div className="absolute left-10 bottom-10 ">
            <h5 className="font-semibold text-2xl">PlayStation 5</h5>
            <p className=" text-[0.875rem]  py-3  w-[70%]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="font-medium">Shop Now</button>
          </div>
        </div>

        <div className="woman  bg-black relative  w-full h-full overflow-hidden border_radius">
          <div className=" absolute right-0 top-0  object-cover w-full h-full ">
            <img
              src={Woman}
              alt="Woman"
              className=" object-cover w-full h-full "
            />
          </div>
          <div className="absolute bottom-6 left-6">
            <h5 className="font-semibold text-2xl">Women’s Collections</h5>
            <p className=" text-[0.875rem]  py-3  w-[70%]">
              Featured woman collections that give you another vibe.
            </p>
            <button className="font-medium">Shop Now</button>
          </div>
        </div>
        <div className="speakers bg-black   relative   w-full h-full overflow-hidden border_radius">
          <div className=" object-cover absolute top-0 bottom-0 center w-full h-full">
            <img src={Speakers} alt="Speakers" className=" object-cover" />
          </div>
          <div className="absolute bottom-6 left-6 w-full ">
            <h5 className="font-semibold text-2xl">Speakers</h5>
            <p className=" text-[0.875rem]  py-3">Amazon wireless speakers</p>
            <button className="font-medium">Shop Now</button>
          </div>
        </div>
        <div className="perfume bg-black    relative   w-full h-full overflow-hidden border_radius">
          <div className=" object-cover absolute top-0 bottom-0 center w-full h-full">
            <img src={Perfume} alt="Perfume" className=" object-cover" />
          </div>
          <div className="absolute bottom-6 left-6 w-full ">
            <h5 className="font-semibold text-2xl">Perfume</h5>
            <p className=" text-[0.875rem]  py-3">GUCCI INTENSE OUD EDP</p>
            <button className="font-medium">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
