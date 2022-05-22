import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./../Shared/PrimaryButton";

const Service = ({ part }) => {
  const {
    _id,
    name,
    img,
    description,
    price,
    availableQuantity,
    minimumOrderQuantity,
  } = part;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Price: ${price} (per unit)</p>
        <p>Minimum Order Quantity: {minimumOrderQuantity} pieces</p>
        <p>Available Quantity: {availableQuantity} pieces</p>
        <Link to={`/purchase/${_id}`}>
          <PrimaryButton>Purchase</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Service;
