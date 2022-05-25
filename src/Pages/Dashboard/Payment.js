import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const stripePromise = loadStripe(
  "pk_test_51L0Y1cIzpQMsnviFTw0U5eB2QJaCT37jBX18liC19ETBCZxx8qvh7WmlUJmoWVpCXjROVrl9PKPH2mnJtuYXlkiK00sPM5C6tf"
);

const Payment = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/purchase/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello, {user?.displayName}</p>
          <h2 className="card-title">Please Pay for {order.partName}</h2>
          <p>
            Your Order:{" "}
            <span className="text-orange-700">{order.partName}</span>, price $
            {order.userQuantity * order.price}
          </p>
          <p>Please pay: ${order.userQuantity * order.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
