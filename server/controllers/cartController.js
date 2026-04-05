const { addToCart, getCart, removeFromCart, clearCart } = require("../services/cartServices");

const addToCartController = async (req, res) => {
  const { userId, productId, name, price, image, quantity } = req.body;

  try {
    const updatedCart = await addToCart(userId, productId, name, price, image, quantity);

    return res.status(201).json({
      message: "Item added to cart",
      cart: updatedCart,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error adding item to cart",
      error: err.message,
    });
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

const removeFromCartController = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const updatedCart = await removeFromCart(userId, productId);
    return res.status(200).json({ message: "Item removed from cart", cart: updatedCart });
  } catch (err) {
    res.status(500).json({ message: "Error removing item from cart", error: err.message });
  }
};

const clearCartController = async (req, res) => {
  const { userId } = req.body;

  try {
    const updatedCart = await clearCart(userId);
    return res.status(200).json({ message: "Cart cleared successfully", cart: updatedCart });
  } catch (err) {
    res.status(500).json({ message: "Error clearing cart", error: err.message });
  }
};

module.exports = { addToCartController, getCartController, removeFromCartController, clearCartController };