const { addToCart, getCart } = require("../services/cartServices");

const addToCartController = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const updatedCart = await addToCart(userId, productId, quantity);
    return res.status(201).json({ message: "Item added to cart", cart: updatedCart });
  } catch (err) {
    res.status(500).json({ message: "Error adding item to cart", error: err.message });
  }
};

const getCartController = async (req, res) => {
  const { userId } = req.query;

  try {
    const cart = await getCart(userId);
    return res.status(200).json({ message: "Cart fetched successfully", cart });
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart", error: err.message });
  }
};

module.exports = { addToCartController, getCartController };