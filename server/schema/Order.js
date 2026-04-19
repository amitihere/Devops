const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  name: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 },
});

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ["card", "upi", "cod", "netbanking"],
      default: "cod",
    },
    address: {
      name: String,
      street: String,
      city: String,
      state: String,
      pincode: String,
      phone: String,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
      default: "confirmed",
    },
    orderId: { type: String, unique: true },
  },
  { timestamps: true }
);

// Auto-generate readable orderId before saving
orderSchema.pre("save", function (next) {
  if (!this.orderId) {
    this.orderId = "TV" + Date.now().toString().slice(-8).toUpperCase();
  }
  next();
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
