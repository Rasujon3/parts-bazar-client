import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { data: myProfile, isLoading } = useQuery("myProfile", () =>
    fetch(
      `https://sujon-assignment12-parts-bazar.herokuapp.com/myProfile/${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl">My Profile</h2>
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      <p>
        Education:{" "}
        {myProfile[0]?.updatedUser?.education
          ? myProfile[0]?.updatedUser?.education
          : "Not Found"}
      </p>
      <p>
        Location:{" "}
        {myProfile[0]?.updatedUser?.location
          ? myProfile[0]?.updatedUser?.location
          : "Not Found"}
      </p>
      <p>
        Phone:{" "}
        {myProfile[0]?.updatedUser?.phone
          ? myProfile[0]?.updatedUser?.phone
          : "Not Found"}
      </p>
      <p>
        LinkedIn Profile Link:{" "}
        {myProfile[0]?.updatedUser?.linkedin
          ? myProfile[0]?.updatedUser?.linkedin
          : "Not Found"}
      </p>
      <button
        className="btn w-full max-w-xs"
        onClick={() => navigate("/dashboard/updateProfile")}
      >
        Update Profile
      </button>
    </div>
  );
};

export default MyProfile;
