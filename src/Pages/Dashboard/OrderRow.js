import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ a, index, setDeletingDoctor }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{a.partName}</td>
        <td>{a.userQuantity}</td>
        <td>{a.userQuantity * a.price}</td>
        <td>
          {a.price && !a.paid && (
            <>
              <Link to={`/dashboard/payment/${a._id}`}>
                <button className="btn btn-xs btn-success">Pay</button>
              </Link>
            </>
          )}
          {a.price && a.paid && (
            <div>
              <p>
                <span className="text-success">Paid</span>
              </p>
              <p>
                Transaction id:{" "}
                <span className="text-success">{a.transactionId}</span>
              </p>
            </div>
          )}
        </td>
        <td>
          {a.price && !a.paid && (
            <label
              onClick={() => setDeletingDoctor(a)}
              htmlFor="confirm-delete-modal"
              className="btn btn-xs btn-error"
            >
              Cancel
            </label>
          )}
        </td>
      </tr>
    </>
  );
};

export default OrderRow;
