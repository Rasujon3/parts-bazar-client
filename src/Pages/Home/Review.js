import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        {/* <p>{review.review}</p> */}
        <div className="flex items-center">
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p>
              Rating: {review.rating} <small>out of 5</small>{" "}
            </p>
            <p>“ {review.review} ”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
