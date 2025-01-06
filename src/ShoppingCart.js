import React, { useState } from "react";
import "./ShoppingCart.css";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpg";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";

function ShoppingCart() {
  const data = [
    {
      id: 1,
      pName: "Noika",
      price: 30000,
      desc: "Lorem Ipsum has been the industry's standard dummy",
      image: img1,
      isStock: true,
    },
    {
      id: 2,
      pName: "Samsung",
      price: 17000,
      desc: "Lorem Ipsum has been the industry's standard dummy",
      image: img2,
      isStock: false,
    },
    {
      id: 3,
      pName: "Sony",
      price: 55000,
      desc: "Lorem Ipsum has been the industry's standard dummy",
      image: img3,
      isStock: true,
    },
    {
      id: 4,
      pName: "Xiomi",
      price: 12000,
      desc: "Lorem Ipsum has been the industry's standard dummy",
      image: img4,
      isStock: false,
    },
    {
      id: 5,
      pName: "iPhone",
      price: 145000,
      desc: "Lorem Ipsum has been the industry's standard dummy",
      image: img3,
      isStock: true,
    },
    {
      id: 6,
      pName: "Sony",
      price: 55000,
      desc: "Lorem Ipsum has been the industry's standard dummy",
      image: img3,
      isStock: true,
    },
    {
      id: 7,
      pName: "Xiomi",
      price: 12000,
      desc: "Lorem Ipsum has been the industry's standard dummy",
      image: img4,
      isStock: false,
    },
    {
      id: 8,
      pName: "iPhone",
      price: 145000,
      desc: "Lorem Ipsum has been the industry's standard dummy",
      image: img3,
      isStock: true,
    },
    {
      id: 10,
      pName: "Xiomi",
      price: 12000,
      desc: "Lorem Ipsum has been the industry's standard dummy",
      image: img4,
      isStock: true,
    },
    {
      id: 10,
      pName: "iPhone",
      price: 145000,
      desc: "Lorem Ipsum has been the industry's standard dummy",
      image: img3,
      isStock: false,
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotal(total + product.price);
  };

  const handleRemoveFromCart = (product) => {
    const removedCart = cartItems.filter((cItem) => cItem.id !== product.id);
    setCartItems(removedCart);
    setTotal(total - product.price);
  };

  return (
    <div className="container_fluid">
      <div className="row">
        <div className="col-10">
          <div className="row m-2 d-flex gap-3">
            {data.map((product) => {
              return (
                <ProductCard
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        </div>
        <div className="col-2">
          <ol class="list-group list-group-numbered">
            <h3>Count: {cartItems.length}</h3>
            {cartItems.map((item) => {
              return (
                <CartItem
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              );
            })}
            <h3>Total: {total}</h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
