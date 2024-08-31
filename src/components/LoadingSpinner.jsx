import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="animate-spin rounded-full h-36 w-36 border-t-4 border-yellow-600"></div>
    </div>
  );
};

export default LoadingSpinner;
