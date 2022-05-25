import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AllOrdersRow = ({ a, index, setDeletingDoctor, refetch }) => {
  const handleStatusChange = (id) => {
    const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/allOrders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      // body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Failed to Shipped the ${a.partName}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully Shipped the ${a.partName}`);
        }
      });
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{a.partName}</td>
        <td>{a.userQuantity * a.price}</td>
        {/* <td>{a.userQuantity}</td> */}
        <td>
          {a.price && !a.paid && (
            <>
              <p>
                <span className="text-success">Unpaid</span>
              </p>
            </>
          )}
          {a.price && a.paid && (
            <div>
              {/* <Link to={`/dashboard/payment/${a._id}`}> */}
              <button
                onClick={() => handleStatusChange(a._id)}
                className="btn btn-xs btn-success"
                disabled={a.status}
              >
                Pending
              </button>
              {/* </Link> */}
              {/* <p>
                Transaction id:{" "}
                <span className="text-success">{a.transactionId}</span>
              </p> */}
            </div>
          )}
        </td>
        {/* Shipped */}
        <td>
          {a.price && !a.paid && (
            <>
              <p>
                <span className="text-success">Pending Payment</span>
              </p>
            </>
          )}
          {a.price && a.paid && (
            <div>
              <p>
                <span className="text-success">
                  {a.status ? "Shipped" : "Not shipped"}
                </span>
              </p>
            </div>
          )}
        </td>
        {/* action */}
        <td>
          {a.price && !a.paid && (
            <label
              onClick={() => setDeletingDoctor(a)}
              htmlFor="confirm-delete-modal"
              className="btn btn-xs btn-error"
            >
              Delete
            </label>
          )}
        </td>
      </tr>
    </>
  );
};

export default AllOrdersRow;
