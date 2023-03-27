import React from "react";
import ShoppingCart from "../Icons/ShoppingCart";

const DisplayProducts = props => {
  console.log(props);
  const { name, price, seller, img, ratings, id } = props.product;
  return (
    <div className="card card-compact w-[300px] mx-auto bg-base-100 shadow-xl border border-gray-300">
      <figure className="w-[286px] h-[286px] mx-auto rounded-xl  mt-1">
        <img src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-lato normal-case">{name}</h2>
        <h6 className="font-bold">Price : ${price}</h6>
        <div className="mt-5">
          <h6>Manufacturer : {seller}</h6>
          <h6>Rating : {ratings} start</h6>
        </div>
      </div>
      <div
        className="card-actions bg-orange-200 cursor-pointer flex justify-center py-3"
        style={{ borderRadius: "0 0 16px 16px" }}
      >
        <button className="flex gap-3 font-lato active:scale-90 transition-all">
          Add to Cart <ShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default DisplayProducts;
