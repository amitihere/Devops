import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Shopcart.css";
import { fetchCart, removeFromCart, clearCart } from "./cartUtils";
import Navbar from "../Navbar/Navbar";

export default function Shopcart() {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load cart on mount
  useEffect(() => {
    const loadCart = async () => {
      setLoading(true);
      const cart = await fetchCart();
      setCartItems(cart.items || []);
      setLoading(false);
    };
    loadCart();
  }, []);

  // Show a temporary message
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2000);
  };

  // Remove one item from the cart
  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId);
      setCartItems((prev) => prev.filter((item) => item.productId !== productId));
      showMessage("Item removed from cart");
    } catch (err) {
      showMessage(err.response?.data?.message || "Failed to remove item");
    }
  };

  // Clear the entire cart
  const handleClear = async () => {
    try {
      await clearCart();
      setCartItems([]);
      showMessage("Cart cleared");
    } catch (err) {
      showMessage(err.response?.data?.message || "Failed to clear cart");
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="shopcart">
        <div className="shopcart-header">
          <h2>Your Cart</h2>
          {cartItems.length > 0 && (
            <span className="shopcart-count">{cartItems.length} item{cartItems.length > 1 ? "s" : ""}</span>
          )}
        </div>

        {message && <div className="shopcart-warning">{message}</div>}

        <div className="shopcart-body">
          {loading ? (
            <p className="shopcart-loading">Loading your cart...</p>
          ) : cartItems.length === 0 ? (
            <div className="shopcart-empty">
              <span className="shopcart-empty-icon">🛒</span>
              <p>Your shopping cart is empty</p>
              <p className="shopcart-empty-hint">
                Browse categories and add items to your cart (max 5 items)
              </p>
              <button className="shopcart-browse-btn" onClick={() => navigate("/")}>
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item._id} className="shopcart-item">
                  <img
                    src={item.image || "https://via.placeholder.com/100?text=No+Image"}
                    alt={item.name}
                    className="shopcart-item-image"
                  />
                  <div className="shopcart-item-info">
                    <h3 className="shopcart-item-name">{item.name}</h3>
                    <p className="shopcart-item-price">₹{item.price?.toLocaleString("en-IN")}</p>
                    <p className="shopcart-item-qty">Qty: {item.quantity}</p>
                  </div>
                  <button
                    className="shopcart-item-remove"
                    onClick={() => handleRemove(item.productId)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Total and actions */}
              <div className="shopcart-footer">
                <div className="shopcart-total">
                  <span>Total:</span>
                  <span className="shopcart-total-price">₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>
                <div className="shopcart-actions">
                  <button className="shopcart-clear-btn" onClick={handleClear}>
                    Clear Cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
