const Order = require("../schema/Order");
const Cart = require("../schema/Cart");

// Place a new order from cart items
const placeOrder = async (userId, items, totalAmount, paymentMethod, address) => {
  const order = await Order.create({
    userId,
    items,
    totalAmount,
    paymentMethod,
    address,
    status: "confirmed",
  });

  // Clear the cart after ordering
  await Cart.findOneAndUpdate({ userId }, { items: [] });

  return order;
};

// Get all orders for a user
const getUserOrders = async (userId) => {
  return await Order.find({ userId }).sort({ createdAt: -1 });
};

// Get single order
const getOrderById = async (orderId, userId) => {
  return await Order.findOne({ orderId, userId });
};

module.exports = { placeOrder, getUserOrders, getOrderById };
