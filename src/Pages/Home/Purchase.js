import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [part, setPart] = useState({});
  const [userQuantity, setUserQuantity] = useState(0);
  const [orderError, setOrderError] = useState("");
  // console.log(parseFloat(userQuantity));

  useEffect(() => {
    const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/part/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPart(data);
        setUserQuantity(parseFloat(data.minimumOrderQuantity));
      });
  }, [id]);

  const {
    name,
    img,
    description,
    minimumOrderQuantity,
    availableQuantity,
    price,
  } = part;

  useEffect(() => {
    if (userQuantity > availableQuantity) {
      setOrderError(`Quantity can't greater than ${availableQuantity}`);
    } else if (userQuantity < minimumOrderQuantity) {
      setOrderError(
        `Quantity must be greater or equal than ${minimumOrderQuantity}`
      );
    } else {
      setOrderError("");
    }
  }, [availableQuantity, minimumOrderQuantity, userQuantity]);

  // console.log(availableQuantity);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const address = event.target.address.value;
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
        address,
        partName,
        price,
        minimumOrderQuantity,
        availableQuantity,
        userQuantity,
      };

      const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/purchase`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(purchase),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
          toast.success("Purchase Successfully");
        });
    }
    event.target.reset();
    setUserQuantity(minimumOrderQuantity);
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
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Address"
                    required
                    name="address"
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
                    value={userQuantity}
                    onChange={(e) => setUserQuantity(e.target.value)}
                    required
                    className="input input-bordered"
                  />
                  <label class="label">
                    {/* {orderError && (
                      <span className="label-text-alt text-red-500">
                        {orderError}
                      </span>
                    )} */}
                    <span className="label-text-alt text-red-500">
                      {orderError}
                    </span>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button
                    disabled={
                      userQuantity > availableQuantity ||
                      userQuantity < minimumOrderQuantity
                    }
                    className="btn btn-primary"
                  >
                    Purchase Now
                  </button>
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
