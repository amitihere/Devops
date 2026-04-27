import axios from "axios";

const BASE = "/api/user";

// Get the logged-in user's ID from localStorage
function getUserId() {
  const stored = localStorage.getItem("thriftvault_user");
  if (!stored) return null;
  const user = JSON.parse(stored);
  return user._id;
}

// Fetch the user's cart (returns { items: [] } if no cart exists yet)
export async function fetchCart() {
  const userId = getUserId();
  if (!userId) return { items: [] };

  try {
    const res = await axios.get(`${BASE}/shop/availableItems/cart`, {
      params: { userId },
    });
    return res.data.cart || { items: [] };
  } catch (err) {
    // If cart doesn't exist yet, return empty cart instead of crashing
    console.log("Cart fetch:", err.response?.data?.message || err.message);
    return { items: [] };
  }
}

// Add a product to the cart
export async function addToCart(product) {
  const userId = getUserId();
  const res = await axios.post(`${BASE}/shop/items/cart`, {
    userId,
    productId: product._id || product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
  });
  return res.data;
}

// Remove a product from the cart by its productId string
export async function removeFromCart(productId) {
  const userId = getUserId();
  const res = await axios.delete(`${BASE}/shop/items/cart`, {
    data: { userId, productId },
  });
  return res.data;
}

// Clear the entire cart
export async function clearCart() {
  const userId = getUserId();
  const res = await axios.delete(`${BASE}/shop/cart/clear`, {
    data: { userId },
  });
  return res.data;
}