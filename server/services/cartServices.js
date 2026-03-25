const Cart = require("../schema/Cart");
const Product = require("../schema/Products");

const addToCart = async (userId, productId, quantity) => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error("Product not found");
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{ productId, quantity }],
      });
      return cart;
    }

    // Check 5-item cap (count distinct items)
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (!existingItem && cart.items.length >= 5) {
      throw new Error(
        "Cart is full. You can only have up to 5 items. Please clear some items first."
      );
    }

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    return cart;
  } catch (err) {
    console.error("Add to cart error:", err);
    throw err;
  }
};

const getCart = async (userId) => {
  try {
    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart) {
      throw new Error("Cart not found for this user");
    }

    return cart;
  } catch (err) {
    console.error("Get cart error:", err);
    throw err;
  }
};

const removeFromCart = async (userId, productId) => {
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      throw new Error("Cart not found for this user");
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      throw new Error("Item not found in cart");
    }

    cart.items.splice(itemIndex, 1);
    await cart.save();
    return cart;
  } catch (err) {
    console.error("Remove from cart error:", err);
    throw err;
  }
};

module.exports = { addToCart, getCart, removeFromCart };
