import React, { useEffect, useState } from "react";
import DisplayProducts from "../DisplayProducts/DisplayProducts";

const ProductsAndOrder = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 mt-10 gap-5">
      <div className="col-span-4 container mx-auto grid grid-cols-3 gap-10">
        {products
          ? products.map(product => (
              <DisplayProducts
                key={product.id}
                product={product}
              ></DisplayProducts>
            ))
          : console.log("please reload the page")}
      </div>
      <div className="col-span-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aperiam,
        provident sed illo in nesciunt voluptatem. Placeat et officia neque.
        Praesentium repellendus animi unde perspiciatis vero, obcaecati dolor
        sapiente atque?
      </div>
    </div>
  );
};

export default ProductsAndOrder;
