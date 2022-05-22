import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import shipping from "../../assets/icons/shipping.svg";
import support from "../../assets/icons/support.svg";
import guarantee from "../../assets/icons/guarantee.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Fast and free delivery"
        description="Free delivery for all orders over $140"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={shipping}
      ></InfoCard>
      <InfoCard
        cardTitle="24/7 Customer Support"
        description="Friendly 24/7 customer support"
        bgClass="bg-[#3A4256]"
        img={support}
      ></InfoCard>
      <InfoCard
        cardTitle="Money back guarantee"
        description="We return money within 30 days"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={guarantee}
      ></InfoCard>
    </div>
  );
};

export default Info;
