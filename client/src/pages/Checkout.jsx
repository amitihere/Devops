import { useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  FiChevronLeft, 
  FiLock, 
  FiCheckCircle, 
  FiCreditCard, 
  FiSmartphone, 
  FiHome, 
  FiTruck,
  FiBox,
  FiAlertCircle,
  FiRefreshCw
} from "react-icons/fi";
import axios from "axios";
import "./Checkout.css";

const BASE = "http://localhost:3000/api/user";

function getUserId() {
  const stored = localStorage.getItem("thriftvault_user");
  if (!stored) return null;
  try {
    const user = JSON.parse(stored);
    return user._id;
  } catch {
    return null;
  }
}

function getUserData() {
  const stored = localStorage.getItem("thriftvault_user");
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

const PAYMENT_METHODS = [
  {
    id: "card",
    label: "Credit / Debit Card",
    icon: FiCreditCard,
    desc: "Visa, Mastercard, RuPay",
  },
  {
    id: "upi",
    label: "UPI",
    icon: FiSmartphone,
    desc: "GPay, PhonePe, Paytm",
  },
  {
    id: "netbanking",
    label: "Net Banking",
    icon: FiHome,
    desc: "All major Indian banks",
  },
  {
    id: "cod",
    label: "Cash on Delivery",
    icon: FiBox,
    desc: "Pay when you receive",
  },
];

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = totalPrice > 999 ? 0 : 49;
  const discount = Math.floor(totalPrice * 0.05);
  const finalAmount = totalPrice + deliveryFee - discount;

  const user = getUserData();

  const [payMethod, setPayMethod] = useState("upi");
  const [step, setStep] = useState("summary"); // summary | payment | success
  const [placing, setPlacing] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  const [address, setAddress] = useState({
    name: user?.username || "",
    street: user?.address?.street || "",
    city: user?.address?.city || "",
    state: user?.address?.state || "",
    pincode: user?.address?.pincode || "",
    phone: user?.phone || "",
  });

  // Card / UPI inputs (mock)
  const [cardNum, setCardNum] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrder = async () => {
    const userId = getUserId();
    if (!userId) {
      navigate("/login");
      return;
    }
    if (!address.street || !address.city || !address.pincode) {
      setError("Please fill in your delivery address.");
      return;
    }
    setError("");
    setPlacing(true);
    try {
      const res = await axios.post(`${BASE}/orders`, {
        userId,
        items: cartItems.map((item) => ({
          productId: item.productId,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity,
        })),
        totalAmount: finalAmount,
        paymentMethod: payMethod,
        address,
      });
      setOrderId(res.data.order.orderId);
      setStep("success");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to place order.");
    } finally {
      setPlacing(false);
    }
  };

  // ─── Success Screen ───────────────────────────────────────────────
  if (step === "success") {
    return (
      <div className="checkout-page">
        <div className="checkout-success-card">
          <div className="checkout-success-icon">
            <FiCheckCircle size={60} color="#10b981" />
          </div>
          <h1 className="checkout-success-title">Order Confirmed!</h1>
          <p className="checkout-success-sub">
            Your order has been placed successfully.
          </p>
          <div className="checkout-success-id">
            Order ID: <strong>{orderId}</strong>
          </div>
          <div className="checkout-success-items">
            {cartItems.map((item) => (
              <div key={item.productId} className="checkout-success-item">
                <img
                  src={item.image || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&q=80"}
                  alt={item.name}
                />
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
          <div className="checkout-success-total">
            Total Paid: <strong>₹{finalAmount.toLocaleString("en-IN")}</strong>
          </div>
          <div className="checkout-success-actions">
            <button
              className="checkout-btn-primary"
              onClick={() => navigate("/orders")}
            >
              View My Orders
            </button>
            <button
              className="checkout-btn-outline"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Main Checkout UI ─────────────────────────────────────────────
  return (
    <div className="checkout-page">
      {/* HEADER */}
      <div className="checkout-header">
        <button className="checkout-back" onClick={() => navigate("/cart")}>
          <FiChevronLeft size={16} /> Back to Cart
        </button>
        <h1 className="checkout-title">Secure Checkout</h1>
        <div className="checkout-secure-badge">
          <FiLock size={12} style={{ marginRight: '4px' }} /> SSL Secured
        </div>
      </div>

      <div className="checkout-layout">
        {/* LEFT COLUMN */}
        <div className="checkout-left">
          {/* DELIVERY ADDRESS */}
          <section className="checkout-section">
            <h2 className="checkout-section-title">
              <span className="checkout-step-num">1</span>
              Delivery Address
            </h2>
            <div className="checkout-address-form">
              <div className="checkout-row-2">
                <div className="checkout-field">
                  <label>Full Name</label>
                  <input
                    name="name"
                    placeholder="John Doe"
                    value={address.name}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="checkout-field">
                  <label>Phone</label>
                  <input
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={address.phone}
                    onChange={handleAddressChange}
                  />
                </div>
              </div>
              <div className="checkout-field">
                <label>Street Address</label>
                <input
                  name="street"
                  placeholder="House/Flat No., Street, Area"
                  value={address.street}
                  onChange={handleAddressChange}
                />
              </div>
              <div className="checkout-row-3">
                <div className="checkout-field">
                  <label>City</label>
                  <input
                    name="city"
                    placeholder="Mumbai"
                    value={address.city}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="checkout-field">
                  <label>State</label>
                  <input
                    name="state"
                    placeholder="Maharashtra"
                    value={address.state}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="checkout-field">
                  <label>PIN Code</label>
                  <input
                    name="pincode"
                    placeholder="400001"
                    value={address.pincode}
                    onChange={handleAddressChange}
                    maxLength={6}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* PAYMENT METHOD */}
          <section className="checkout-section">
            <h2 className="checkout-section-title">
              <span className="checkout-step-num">2</span>
              Payment Method
            </h2>
            <div className="checkout-payment-grid">
              {PAYMENT_METHODS.map((m) => (
                <div
                  key={m.id}
                  className={`checkout-payment-card ${payMethod === m.id ? "checkout-payment-card--active" : ""}`}
                  onClick={() => setPayMethod(m.id)}
                >
                  <div className="checkout-payment-icon">
                    <m.icon size={22} />
                  </div>
                  <div className="checkout-payment-text">
                    <div className="checkout-payment-label">{m.label}</div>
                    <div className="checkout-payment-desc">{m.desc}</div>
                  </div>
                  <div className={`checkout-radio ${payMethod === m.id ? "checkout-radio--checked" : ""}`} />
                </div>
              ))}
            </div>

            {/* Payment details input */}
            {payMethod === "card" && (
              <div className="checkout-payment-inputs">
                <div className="checkout-field">
                  <label>Card Number</label>
                  <input
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    value={cardNum}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                      setCardNum(v.replace(/(.{4})/g, "$1 ").trim());
                    }}
                  />
                </div>
                <div className="checkout-row-2">
                  <div className="checkout-field">
                    <label>Expiry (MM/YY)</label>
                    <input
                      placeholder="12/27"
                      maxLength={5}
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                    />
                  </div>
                  <div className="checkout-field">
                    <label>CVV</label>
                    <input
                      type="password"
                      placeholder="•••"
                      maxLength={3}
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {payMethod === "upi" && (
              <div className="checkout-payment-inputs">
                <div className="checkout-field">
                  <label>UPI ID</label>
                  <input
                    placeholder="yourname@upi"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                  />
                </div>
              </div>
            )}

            {payMethod === "cod" && (
              <div className="checkout-cod-note">
                <FiBox size={16} style={{ marginRight: '8px' }} />
                You will pay ₹{finalAmount.toLocaleString("en-IN")} when your order arrives.
              </div>
            )}

            {payMethod === "netbanking" && (
              <div className="checkout-cod-note">
                <FiHome size={16} style={{ marginRight: '8px' }} />
                You will be redirected to your bank after placing the order.
              </div>
            )}
          </section>

          {error && <div className="checkout-error">{error}</div>}
        </div>

        {/* RIGHT COLUMN – ORDER SUMMARY */}
        <div className="checkout-right">
          <div className="checkout-summary-card">
            <h2 className="checkout-summary-title">Order Summary</h2>
            <div className="checkout-summary-items">
              {cartItems.map((item) => (
                <div key={item.productId} className="checkout-summary-item">
                  <img
                    src={item.image || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&q=80"}
                    alt={item.name}
                    className="checkout-summary-img"
                  />
                  <div className="checkout-summary-item-info">
                    <p className="checkout-summary-item-name">{item.name}</p>
                    <p className="checkout-summary-item-qty">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <span className="checkout-summary-item-price">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </span>
                </div>
              ))}
            </div>

            <div className="checkout-summary-breakdown">
              <div className="checkout-breakdown-row">
                <span>Subtotal</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="checkout-breakdown-row checkout-breakdown-row--discount">
                <span>Discount (5%)</span>
                <span>−₹{discount.toLocaleString("en-IN")}</span>
              </div>
              <div className="checkout-breakdown-row">
                <span>Delivery</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="checkout-free-label">FREE</span>
                  ) : (
                    `₹${deliveryFee}`
                  )}
                </span>
              </div>
              {deliveryFee === 0 && (
                <div className="checkout-free-note">
                  Free delivery on orders above ₹999
                </div>
              )}
              <div className="checkout-breakdown-total">
                <span>Total</span>
                <span>₹{finalAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <button
              className="checkout-place-btn"
              onClick={placeOrder}
              disabled={placing}
            >
              {placing ? (
                <FiRefreshCw className="checkout-spinner" />
              ) : (
                <>
                  {payMethod === "cod"
                    ? "Place Order"
                    : `Pay ₹${finalAmount.toLocaleString("en-IN")}`}
                </>
              )}
            </button>

            <p className="checkout-disclaimer">
              <FiLock size={12} style={{ marginRight: '4px' }} /> Your data is encrypted and secure. By placing this order, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
