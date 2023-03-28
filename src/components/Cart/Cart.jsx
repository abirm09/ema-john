import React from "react";
import { addition } from "../../utilities/Addition";

const Cart = ({ cart }) => {
  //   const totalPrice = addition(cart, "price");
  //   const totalShipping = addition(cart, "shipping");
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = parseFloat(((totalPrice * 7) / 100).toFixed(2));
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="space-y-5">
      <h2 className="text-center font-semibold text-2xl">Order summery</h2>
      <h3>Selected item : {cart.length}</h3>
      <p>Total price : ${totalPrice}</p>
      <p>Total shipping : ${totalShipping}</p>
      <p>Tax : ${tax}</p>
      <h6 className="font-bold">Grand total : ${grandTotal}</h6>
    </div>
  );
};

export default Cart;
