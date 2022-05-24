import React from "react";

const ProductRow = ({ a, index, setDeletingDoctor }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{a.name}</td>
      <td>{a.price}</td>
      <td>{a.availableQuantity}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(a)}
          htmlFor="confirm-product-delete-modal"
          className="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
