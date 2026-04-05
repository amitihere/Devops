const Cart = require("../schema/Cart");

const addToCart = async (userId, productId, name, price, image, quantity) => {
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{ productId, name, price, image, quantity }],
      });
      return cart;
    }

    const existingItem = cart.items.find(
      (item) => item.productId === productId
    );

    if (!existingItem && cart.items.length >= 5) {
      throw new Error(
        "Cart is full. You can only have up to 5 items."
      );
    }

    if (existingItem) {
      existingItem.quantity += quantity;

      // Update latest price/name/image
      existingItem.name = name;
      existingItem.price = price;
      existingItem.image = image;
    } else {
      cart.items.push({ productId, name, price, image, quantity });
    }

    await cart.save();
    return cart;
  } catch (err) {
    console.error("Add to cart error:", err);
    throw err;
  }
};

// ✅ GET CART
const getCart = async (userId) => {
  try {
    const cart = await Cart.findOne({ userId });

    // If no cart exists yet, return an empty cart
    if (!cart) {
      return { userId, items: [] };
    }

    return cart;
  } catch (err) {
    console.error("Get cart error:", err);
    throw err;
  }
};

// ✅ REMOVE ITEM
const removeFromCart = async (userId, productId) => {
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      throw new Error("Cart not found for this user");
    }

    cart.items = cart.items.filter(
      (item) => item.productId !== productId
    );

    await cart.save();
    return cart;
  } catch (err) {
    console.error("Remove from cart error:", err);
    throw err;
  }
};

// ✅ CLEAR CART
const clearCart = async (userId) => {
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      throw new Error("Cart not found for this user");
    }

    cart.items = [];
    await cart.save();
    return cart;
  } catch (err) {
    console.error("Clear cart error:", err);
    throw err;
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
};