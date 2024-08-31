import React from "react";

const ErrorComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white text-center">
      <h1 className="text-4xl font-bold mb-4 text-yellow-700">
        Oops! Something went wrong.
      </h1>
      <p className="text-xl mb-6 font-semibold">
        We couldn't load the data. Please try again later.
      </p>
    </div>
  );
};

export default ErrorComponent;
