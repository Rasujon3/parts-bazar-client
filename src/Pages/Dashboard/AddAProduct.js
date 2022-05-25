import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const AddAProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "0f72de4f776e48e1dbdd622246559a5c";

  const onSubmit = async (data) => {
    // console.log(data);
    if (data.minimumOrderQuantity > data.availableQuantity) {
      toast.error("Minimum quantity can't be greater than available quantity");
      return;
    } else {
      const image = data.img[0];
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            const img = result.data.url;
            const product = {
              availableQuantity: data.availableQuantity,
              description: data.description,
              minimumOrderQuantity: data.minimumOrderQuantity,
              name: data.name,
              price: data.price,
              img: img,
            };
            //   sent to your database
            const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/part`;
            fetch(url, {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(product),
            })
              .then((res) => res.json())
              .then((inserted) => {
                if (inserted.insertedId) {
                  toast.success("Product added successfully");
                  reset();
                } else {
                  toast.error("Failed to add the product");
                }
                // console.log("product", inserted);
              });
          }
          // console.log("imgbb", result);
        });
    }
  };
  return (
    <div>
      <h2 className="text-2xl">Add a Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Product Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum Order Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Minimum Order Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("minimumOrderQuantity", {
              required: {
                value: true,
                message: "Minimum Order Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.minimumOrderQuantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.minimumOrderQuantity.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("availableQuantity", {
              required: {
                value: true,
                message: "Minimum Order Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.availableQuantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.availableQuantity.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("img", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.img?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.img.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
