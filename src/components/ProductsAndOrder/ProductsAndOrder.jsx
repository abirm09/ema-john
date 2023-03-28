import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import DisplayProducts from "../DisplayProducts/DisplayProducts";

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
    addToDb(product.id);
  };
  useEffect(() => {
    const addedToCart = getShoppingCart();
    console.log(addedToCart);
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5  gap-5">
      <div className="col-span-4 container mx-auto grid grid-cols-3 gap-10 mt-10">
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
      <div className="col-span-1 bg-orange-300 pt-10 pl-5 h-max pb-10 sticky top-0">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default ProductsAndOrder;
