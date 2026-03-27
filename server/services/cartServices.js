const Cart = require("../schema/Cart");

const addToCart = async (userId, productId, name, price, quantity) => {
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{ productId, name, price, quantity }],
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

      // (Optional) update latest price/name
      existingItem.name = name;
      existingItem.price = price;
    } else {
      cart.items.push({ productId, name, price, quantity });
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

    if (!cart) {
      throw new Error("Cart not found for this user");
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