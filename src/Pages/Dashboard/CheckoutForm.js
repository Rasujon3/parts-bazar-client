import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const CheckoutForm = ({ order }) => {
  const [user] = useAuthState(auth);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [stripeError, setStripeError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { _id, email, partName, price, userQuantity } = order;
  const payablePrice = price * userQuantity;

  useEffect(() => {
    const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/create-payment-intent`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ payablePrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.message) {
          setStripeError(data?.message);
          toast.error(data?.message);
          return;
        }
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
        // console.log(data);
      });
  }, [payablePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      console.log(intentError?.message);
      success("");
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      //   console.log(paymentIntent);
      setSuccess("Congrats! Your payment is completed.");

      //   store payment on database
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/purchase/${_id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {(cardError || stripeError) && (
        <p className="text-red-500">{cardError || stripeError}</p>
      )}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>
            Your transaction Id:{" "}
            <span className="text-orange-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
