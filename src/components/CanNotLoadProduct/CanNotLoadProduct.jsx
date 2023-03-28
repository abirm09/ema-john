import React from "react";

const CanNotLoadProduct = () => {
  return (
    <div className="w-full">
      <h2 className="text-center">Products can not loaded.</h2>
      <div className="text-center">
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default CanNotLoadProduct;
