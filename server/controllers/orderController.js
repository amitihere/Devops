const { placeOrder, getUserOrders, getOrderById } = require("../services/orderServices");

const placeOrderController = async (req, res) => {
  const { userId, items, totalAmount, paymentMethod, address } = req.body;

  if (!userId || !items || !items.length || !totalAmount) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const order = await placeOrder(userId, items, totalAmount, paymentMethod, address);
    return res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Error placing order", error: err.message });
  }
};

const getUserOrdersController = async (req, res) => {
  const { userId } = req.query;

  if (!userId) return res.status(400).json({ message: "userId is required" });

  try {
    const orders = await getUserOrders(userId);
    return res.status(200).json({ message: "Orders fetched", orders });
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders", error: err.message });
  }
};

const getOrderByIdController = async (req, res) => {
  const { orderId } = req.params;
  const { userId } = req.query;

  try {
    const order = await getOrderById(orderId, userId);
    if (!order) return res.status(404).json({ message: "Order not found" });
    return res.status(200).json({ message: "Order fetched", order });
  } catch (err) {
    res.status(500).json({ message: "Error fetching order", error: err.message });
  }
};

module.exports = { placeOrderController, getUserOrdersController, getOrderByIdController };
