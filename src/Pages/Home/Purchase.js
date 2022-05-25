import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [part, setPart] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/part/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id]);

  const {
    name,
    img,
    description,
    minimumOrderQuantity,
    availableQuantity,
    price,
  } = part;

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const partName = event.target.partName.value;
    const price = parseFloat(event.target.price.value);
    const minimumOrderQuantity = parseFloat(
      event.target.minimumOrderQuantity.value
    );
    const availableQuantity = parseFloat(event.target.availableQuantity.value);
    const userQuantity = parseFloat(event.target.userQuantity.value);

    if (userQuantity < minimumOrderQuantity) {
      toast.error(
        `Quantity must be greater or equal than ${minimumOrderQuantity}`
      );
      return;
    } else if (userQuantity > availableQuantity) {
      toast.error(`Quantity can't greater than ${availableQuantity}`);
      return;
    } else {
      const purchase = {
        email,
        phone,
        partName,
        price,
        minimumOrderQuantity,
        availableQuantity,
        userQuantity,
      };

      const url = `http://localhost:5000/purchase`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(purchase),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          toast.success("Purchase Successfully");
        });
    }
  };

  return (
    <div>
      <h3 className="text-primary text-xl font-bold uppercase text-center">
        Hello, {user?.displayName}
      </h3>
      <p className="text-primary text-center">
        <small>Your email address: {user?.email}</small>
      </p>
      {/* <h1 className="text-5xl font-bold">Purchase now!</h1> */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={img} alt="purchase" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered"
                    value={user?.email || ""}
                    readOnly
                    disabled
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Part Name</span>
                  </label>
                  <input
                    type="text"
                    name="partName"
                    value={name || ""}
                    readOnly
                    disabled
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Price <small>(per unit)</small>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={price || ""}
                    disabled
                    readOnly
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Minimum Order Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="minimumOrderQuantity"
                    value={minimumOrderQuantity || ""}
                    disabled
                    readOnly
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="availableQuantity"
                    value={availableQuantity || ""}
                    disabled
                    readOnly
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Your Order Quantity"
                    name="userQuantity"
                    required
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Purchase Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
