import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data, event) => {
    console.log(data);
    console.log(event.target.email.value);
    const email = event.target.email.value;
    const myProfile = {
      education: data.education,
      linkedin: data.linkedin,
      location: data.location,
      phone: data.phone,
      email: email,
    };
    const url = `https://sujon-assignment12-parts-bazar.herokuapp.com/myProfile/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(myProfile),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        // console.log(result.modifiedCount);
        if (result.modifiedCount === 0 && result.upsertedCount !== 1) {
          toast.error("Not update your profile");
          return;
        }
        toast.success("Profile Updated Successfully");
        reset();
      });
  };
  return (
    <div>
      <h2 className="text-2xl">Update Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            value={user?.displayName || ""}
            readOnly
            disabled
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Email */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="input input-bordered w-full max-w-xs"
            value={user?.email || ""}
            readOnly
            disabled
          />
        </div>
        {/* Education */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <textarea
            type="text"
            placeholder="Your Education"
            className="input input-bordered w-full max-w-xs"
            {...register("education", {
              required: {
                value: true,
                message: "Education is Required",
              },
            })}
          />
          <label className="label">
            {errors.education?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.education.message}
              </span>
            )}
          </label>
        </div>
        {/* Location */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            placeholder="Your Location"
            className="input input-bordered w-full max-w-xs"
            {...register("location", {
              required: {
                value: true,
                message: "Location is Required",
              },
            })}
          />
          <label className="label">
            {errors.location?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.location.message}
              </span>
            )}
          </label>
        </div>
        {/* Phone */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            placeholder="Your Phone Number"
            className="input input-bordered w-full max-w-xs"
            {...register("phone", {
              required: {
                value: true,
                message: "Phone is Required",
              },
            })}
          />
          <label className="label">
            {errors.phone?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.phone.message}
              </span>
            )}
          </label>
        </div>
        {/* LinkedIn Profile */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">LinkedIn Profile</span>
          </label>
          <input
            type="text"
            placeholder="Your LinkedIn Profile"
            className="input input-bordered w-full max-w-xs"
            {...register("linkedin", {
              required: {
                value: true,
                message: "LinkedIn Profile is Required",
              },
            })}
          />
          <label className="label">
            {errors.linkedin?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.linkedin.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs"
          type="submit"
          value="Update Profile"
        />
      </form>
    </div>
  );
};

export default UpdateProfile;
