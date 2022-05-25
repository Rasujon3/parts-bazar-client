import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { signOut } from "firebase/auth";
import Loading from "./../Shared/Loading";
import ProductRow from "./ProductRow";
import ProductDeleteConfirm from "./ProductDeleteConfirm";

const ManageProducts = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery(["product", user, navigate], () =>
    fetch(`https://sujon-assignment12-parts-bazar.herokuapp.com/parts`, {
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
      <h2>All Parts: {parts.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
              {/* <th>Remove</th> */}
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {parts.map((a, index) => (
              <ProductRow
                a={a}
                index={index}
                key={a._id}
                setDeletingDoctor={setDeletingDoctor}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ProductDeleteConfirm
          deletingDoctor={deletingDoctor}
          refetch={refetch}
          setDeletingDoctor={setDeletingDoctor}
        />
      )}
    </div>
  );
};

export default ManageProducts;
