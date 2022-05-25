import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { signOut } from "firebase/auth";
import Loading from "./../Shared/Loading";
import AllOrdersRow from "./AllOrdersRow";
import ConfirmAllOrdersDelete from "./ConfirmAllOrdersDelete";

const ManageAllOrders = () => {
  // const [orders, setOrders] = useState([]);
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    data: allOrders,
    isLoading,
    refetch,
  } = useQuery(["allOrders", user, navigate], () =>
    fetch(`https://sujon-assignment12-parts-bazar.herokuapp.com/allOrders`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      // console.log(res);
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>All Orders: {allOrders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Order Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {allOrders.map((a, index) => (
              <AllOrdersRow
                a={a}
                index={index}
                key={a._id}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmAllOrdersDelete
          deletingDoctor={deletingDoctor}
          refetch={refetch}
          setDeletingDoctor={setDeletingDoctor}
        />
      )}
    </div>
  );
};

export default ManageAllOrders;
