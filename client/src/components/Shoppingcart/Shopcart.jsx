import React, { useState, useEffect } from "react";
import "./Shopcart.css";
import { fetchCart, removeFromCart, clearCart } from "./cartUtils";

export default function Shopcart() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState("");

  useEffect(() => {
    const loadCart = async () => {
      try {
        const items = await fetchCart();
        setCart(items);
      } catch (err) {
        console.log(err);
      }
    };
    loadCart();
  }, []);

  const handleRemove = async (itemId) => {
    const result = await removeFromCart(itemId);
    if (result.success) {
      setCart((prev) => prev.filter((item) => item._id !== itemId));
    }
  };

  const handleClear = async () => {
    const result = await clearCart();
    if (result.success) {
      setCart([]);
      setWarning("");
    }
  };

  return (
    <div className="shopcart">
      <div className="shopcart-header">
        <h2>Your Cart</h2>
      </div>

      {warning && <div className="shopcart-warning">⚠️ {warning}</div>}

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
                  src={item.image}
                  alt={item.name}
                  className="shopcart-item-image"
                />
                <div className="shopcart-item-info">
                  <h3 className="shopcart-item-name">{item.name}</h3>
                  <p className="shopcart-item-price">₹{item.price}</p>
                </div>
                <button
                  className="shopcart-item-remove"
                  onClick={() => handleRemove(item._id)}
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
  );
}
