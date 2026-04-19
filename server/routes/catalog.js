const express = require("express")
const router = express.Router()
const { signupMiddle, loginMiddle } = require("../middlewares/authentication")
const { signupController, loginController } = require("../controllers/userController");
const { cartMiddleware } = require("../middlewares/cartMiddle");
const { addToCartController, getCartController, removeFromCartController, clearCartController } = require("../controllers/cartController");
const { placeOrderController, getUserOrdersController, getOrderByIdController } = require("../controllers/orderController");
const User = require("../schema/userDataset");

router.post("/auth/signup", signupMiddle, signupController);
router.post("/auth/login", loginMiddle, loginController);

// Profile update
router.put("/auth/profile", async (req, res) => {
  const { userId, username, phone, address } = req.body;
  if (!userId) return res.status(400).json({ message: "userId required" });
  try {
    const updated = await User.findByIdAndUpdate(
      userId,
      { username, phone, address },
      { new: true, runValidators: true }
    );
    return res.status(200).json({ message: "Profile updated", user: updated });
  } catch (err) {
    return res.status(500).json({ message: "Error updating profile", error: err.message });
  }
});

router.get("/catalog", (req, res) => {
    res.json({ message: "Welcome to the catalog!" })
})

router.post("/shop/items/cart", cartMiddleware, addToCartController);
router.get("/shop/availableItems/cart", getCartController);
router.delete("/shop/items/cart", removeFromCartController);
router.delete("/shop/cart/clear", clearCartController);

// Order routes
router.post("/orders", placeOrderController);
router.get("/orders", getUserOrdersController);
router.get("/orders/:orderId", getOrderByIdController);

module.exports = router