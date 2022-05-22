import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.apmbv.nl/wp-content/uploads/2018/03/APM-headers_2.png"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <h1 className="text-5xl font-bold">
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
