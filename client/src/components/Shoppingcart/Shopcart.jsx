import React, { useState, useEffect } from "react";
import "./Shopcart.css";
import { fetchCart, removeFromCart, clearCart } from "./cartUtils";
import Navbar from "../Navbar/Navbar";

export default function Shopcart() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const data = await fetchCart();
      setCart(data.cart?.items || []);
    } catch (err) {
      console.log("Cart fetch error:", err);
    }
  };

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId);
      setCart((prev) => prev.filter((item) => item.productId?._id !== productId));
      setMessage("Item removed from cart");
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to remove item");
    }
  };

  const handleClear = async () => {
    try {
      await clearCart();
      setCart([]);
      setMessage("Cart cleared");
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to clear cart");
    }
  };

  return (
    <>
    <Navbar />
    <div className="shopcart">
      
      <div className="shopcart-header">
        <h2>Your Cart</h2>
      </div>

      {message && <div className="shopcart-warning">{message}</div>}

      <div className="shopcart-body">
        {cart.length === 0 ? (
          <>
            <p>Your shopping cart is currently empty</p>
            <p>
              Maximum number of items which can be added are 5, so please keep
              the useful
            </p>
          </>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item._id} className="shopcart-item">
                <img
                  src={item.productId?.image}
                  alt={item.productId?.name}
                  className="shopcart-item-image"
                />
                <div className="shopcart-item-info">
                  <h3 className="shopcart-item-name">{item.productId?.name}</h3>
                  <p className="shopcart-item-price">₹{item.productId?.price}</p>
                  <p className="shopcart-item-qty">Qty: {item.quantity}</p>
                </div>
                <button
                  className="shopcart-item-remove"
                  onClick={() => handleRemove(item.productId?._id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button className="shopcart-clear-btn" onClick={handleClear}>
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
    </>
  );
}
