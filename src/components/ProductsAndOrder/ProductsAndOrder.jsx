import React, { useEffect, useState } from "react";
import DisplayProducts from "../DisplayProducts/DisplayProducts";
import ProductNotLoaded from "../Productnotloaded/Productnotloaded";

const ProductsAndOrder = () => {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  const handleAddToCart = product => {
    setCart([...cart, product]);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 mt-10 gap-5">
      <div className="col-span-4 container mx-auto grid grid-cols-3 gap-10">
        {products
          ? products.map(product => (
              <DisplayProducts
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              ></DisplayProducts>
            ))
          : console.log("can not loaded.")}
      </div>
      <div className="col-span-1">
        <h2>Order summery</h2>
        <h3>Selected item : {cart.length}</h3>
      </div>
    </div>
  );
};

export default ProductsAndOrder;
