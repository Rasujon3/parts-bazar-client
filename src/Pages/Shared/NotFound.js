import React from "react";

const NotFound = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/R0N7mvF/notFound.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
            alt="notFoung"
          />
          <div>
            <h1 class="text-5xl font-bold">Error 404!</h1>
            <p class="py-6">Oops! The page you're looking for isn't here.</p>
            <p class="py-6">
              You might have the wrong address, or the page may have moved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
