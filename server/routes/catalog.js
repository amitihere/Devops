const express = require("express")
const router = express.Router()
const {signupMiddle,loginMiddle} = require("../middlewares/authentication")
const {signupController,loginController} = require("../controllers/userController");
const { cartMiddleware } = require("../middlewares/cartMiddle");
const { addToCartController, getCartController, removeFromCartController, clearCartController } = require("../controllers/cartController");

router.post("/auth/signup", signupMiddle, signupController);
router.post("/auth/login", loginMiddle, loginController);
router.get("/catalog", (req, res) => {
    res.json({message: "Welcome to the catalog!"})
})

// Cart routes
router.post("/shop/items/cart", cartMiddleware, addToCartController);
router.get("/shop/availableItems/cart", getCartController);
router.delete("/shop/items/cart", removeFromCartController);
router.delete("/shop/cart/clear", clearCartController);


module.exports = router