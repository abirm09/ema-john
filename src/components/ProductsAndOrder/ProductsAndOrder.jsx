import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import CanNotLoadProduct from "../CanNotLoadProduct/CanNotLoadProduct";
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
    let newCart = [];
    const exists = cart.find(pd => pd.id == product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    //if there is any product exists in our state
    if (products) {
      //get id of the added product
      for (let id in storedCart) {
        //get product from the state by using id
        const savedProduct = products.find(product => product.id == id);
        if (savedProduct) {
          savedProduct.quantity = storedCart[id];
          savedCart.push(savedProduct);
        }
        // console.log(savedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5  gap-5">
      <div className="col-span-4 container mx-auto grid grid-cols-3 gap-10 mt-10">
        {products ? (
          products.map(product => (
            <DisplayProducts
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></DisplayProducts>
          ))
        ) : (
          <CanNotLoadProduct></CanNotLoadProduct>
        )}
      </div>
      <div className="col-span-1 bg-orange-300 pt-10 pl-5 h-max pb-10 sticky top-0">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default ProductsAndOrder;
