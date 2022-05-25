import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const FounderInfo = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img
          className="mt-[-100px]"
          src="https://www.apmbv.nl/wp-content/uploads/2018/03/Guido-half-vrij.png"
          alt="Guido Gerritsen"
        />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary font-bold">Guido Gerritsen</h3>
        <h2 className="text-3xl text-white py-5">CEO & Founder</h2>
        <p className="text-white pb-5">
          As founder and managing director of PB, I personally guarantee the
          best quality of our products. Please watch our corporate video to see
          the way we ensure the best products.
        </p>
        <PrimaryButton>More Details</PrimaryButton>
      </div>
    </section>
  );
};

export default FounderInfo;
