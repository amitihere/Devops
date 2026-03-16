import axios from "axios";

const MAX_CART_ITEMS = 5;

export async function fetchCart() {
  const response = await axios.get(`yet to add backend url`, {
    withCredentials: true,
  });
  return response.data; 
}

export async function addToCart(item, currentCount) {
  if (currentCount >= MAX_CART_ITEMS) {
    return {
      success: false,
      message:
        "Your cart already has 5 items — the maximum allowed. Please clear your cart first before adding more.",
    };
  }

  try {
    const response = await axios.post(
      `yet to add backend url`,
      { item },
      { withCredentials: true }
    );

    return {
      success: true,
      message: "Item added to cart!",
      data: response.data,
    };
  } catch (err) {
    const serverMsg =
      err.response?.data?.message || "Failed to add item to cart.";
    return { success: false, message: serverMsg };
  }
}
export async function removeFromCart(itemId) {
  try {
    await axios.delete(`yet to add backend url`, {
      withCredentials: true,
    });
    return { success: true, message: "Item removed." };
  } catch (err) {
    const serverMsg =
      err.response?.data?.message || "Failed to remove item.";
    return { success: false, message: serverMsg };
  }
}

export async function clearCart() {
  try {
    await axios.delete(`yet to add backend url`, {
      withCredentials: true,
    });
    return { success: true, message: "Cart cleared." };
  } catch (err) {
    const serverMsg =
      err.response?.data?.message || "Failed to clear cart.";
    return { success: false, message: serverMsg };
  }
}

export async function getCount() {
  try {
    const response = await axios.get(`yet to add backend url`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    const serverMsg =
      err.response?.data?.message || "Failed to get count.";
    return { success: false, message: serverMsg };
  }
}

export { MAX_CART_ITEMS };
