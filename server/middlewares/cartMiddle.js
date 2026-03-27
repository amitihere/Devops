const mongoose = require("mongoose");

const cartMiddleware = (req, res, next) => {
  const { userId, productId, name, price, quantity } = req.body;

  if (!userId || !productId || !name || price === undefined) {
    return res.status(400).json({
      message: "userId, productId, name and price are required",
    });
  }

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid userId format" });
  }

  if (typeof productId !== "string") {
    return res.status(400).json({ message: "productId must be a string" });
  }

  if (typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ message: "Invalid product name" });
  }

  if (typeof price !== "number" || price < 0) {
    return res.status(400).json({ message: "Price must be a positive number" });
  }

  if (quantity !== undefined) {
    if (typeof quantity !== "number" || quantity < 1) {
      return res.status(400).json({
        message: "Quantity must be a positive number",
      });
    }
  } else {
    req.body.quantity = 1;
  }

  next();
};

module.exports = { cartMiddleware };