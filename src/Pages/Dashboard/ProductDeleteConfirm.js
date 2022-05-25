import React from "react";
import { toast } from "react-toastify";

const ProductDeleteConfirm = ({
  deletingDoctor,
  refetch,
  setDeletingDoctor,
}) => {
  //   const { name, email } = deletingDoctor;
  //   console.log(deletingDoctor.partName);
  const handleDelete = () => {
    const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/part/${deletingDoctor._id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      // body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${deletingDoctor.name} is deleted Successfully.`);
          setDeletingDoctor(null);
          refetch();
        }
      });
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input
        type="checkbox"
        id="confirm-product-delete-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete {deletingDoctor.name}!
          </h3>
          <p className="py-4">If you delete this, you can't back it.</p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label
              htmlFor="confirm-product-delete-modal"
              className="btn btn-xs"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteConfirm;
