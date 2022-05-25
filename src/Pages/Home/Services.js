import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/parts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary  text-xl font-bold uppercase">
          Our Products
        </h3>
        {/* <h2 className="text-4xl">Services We Provide</h2> */}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {parts.slice(0, 6).map((part) => (
          <Service key={part._id} part={part}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
