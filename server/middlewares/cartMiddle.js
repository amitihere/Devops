const mongoose = require("mongoose");

const cartMiddleware = (req, res, next) => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !productId) {
    return res.status(400).json({ message: "userId and productId are required" });
  }

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid userId format" });
  }

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid productId format" });
  }

  if (quantity !== undefined && (typeof quantity !== "number" || quantity < 1)) {
    return res.status(400).json({ message: "Quantity must be a positive number" });
  }

  if (!quantity) {
    req.body.quantity = 1;
  }

  next();
};

module.exports = { cartMiddleware };