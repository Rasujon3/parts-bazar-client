import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/R0N7mvF/notFound.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="notFoung"
          />
          <div>
            <h1 className="text-5xl font-bold">Error 404!</h1>
            <p className="py-6">
              Oops! The page you're looking for isn't here.
            </p>
            <p className="py-6">
              You might have the wrong address, or the page may have moved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
