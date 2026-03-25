import axios from "axios";

const BASE = "http://localhost:3000/api/user";

function getUserId() {
  const stored = localStorage.getItem("thriftvault_user");
  if (!stored) return null;
  const user = JSON.parse(stored);
  return user._id;
}

export async function fetchCart() {
  const userId = getUserId();
  const res = await axios.get(`${BASE}/shop/availableItems/cart`, {
    params: { userId },
  });
  return res.data;
}

export async function addToCart(productId, quantity = 1) {
  const userId = getUserId();
  const res = await axios.post(`${BASE}/shop/items/cart`, {
    userId,
    productId,
    quantity,
  });
  return res.data;
}

export async function removeFromCart(productId) {
  const userId = getUserId();
  const res = await axios.delete(`${BASE}/shop/items/cart`, {
    data: { userId, productId },
  });
  return res.data;
}

export async function clearCart() {
  const userId = getUserId();
  const res = await axios.delete(`${BASE}/shop/cart/clear`, {
    data: { userId },
  });
  return res.data;
}
