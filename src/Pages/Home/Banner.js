import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import banner from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="sm:max-w-[100%] lg:max-w-sm rounded-lg shadow-2xl sm:w-[70%]"
          alt="chair"
        />
        <div>
          <h1 className="text-2xl font-bold">
            Keep Your Vehicle in Great Condition with Top Auto Parts
          </h1>
          <p className="py-6">Engineered for your best workout yet</p>
          <PrimaryButton>Shop Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
