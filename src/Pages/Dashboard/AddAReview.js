import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddAReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        reset();
        toast.success("Review Added Successfully");
      });
  };
  return (
    <div>
      <h2 className="text-2xl">Add a Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
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
            <span className="label-text">Rating</span>
          </label>
          <select
            className="select w-full max-w-xs"
            {...register("rating", {
              required: {
                value: true,
                message: "Rating is Required",
              },
            })}
          >
            <option disabled selected>
              Select your rating
            </option>
            <option>1</option>
            <option>2</option>
            <option selected>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <label className="label">
            {errors.rating?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.rating.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <textarea
            type="text"
            className="textarea textarea-bordered w-full max-w-xs"
            {...register("review", {
              required: {
                value: true,
                message: "Review is Required",
              },
            })}
          />
          <label className="label">
            {errors.review?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.review.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddAReview;
