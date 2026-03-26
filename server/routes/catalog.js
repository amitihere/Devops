const express = require("express")
const router = express.Router()
const { signupMiddle, loginMiddle } = require("../middlewares/authentication")
const { signupController, loginController } = require("../controllers/userController");
const { cartMiddleware } = require("../middlewares/cartMiddle");
const { addToCartController, getCartController, removeFromCartController, clearCartController } = require("../controllers/cartController");
const { sellerAuthMiddle, productMiddle } = require("../middlewares/productMiddle");
const { getCategoriesController, addProductController, addCategoryController } = require("../controllers/productController");
const { sellerSignupController, sellerLoginController } = require("../controllers/sellerController");

router.post("/auth/signup", signupMiddle, signupController);
router.post("/auth/login", loginMiddle, loginController);

router.post("/auth/seller/signup", signupMiddle, sellerSignupController);
router.post("/auth/seller/login", loginMiddle, sellerLoginController);

router.get("/catalog", (req, res) => {
    res.json({ message: "Welcome to the catalog!" })
})

router.post("/shop/items/cart", cartMiddleware, addToCartController);
router.get("/shop/availableItems/cart", getCartController);
router.delete("/shop/items/cart", removeFromCartController);
router.delete("/shop/cart/clear", clearCartController);

router.get("/seller/categories", getCategoriesController);
router.post("/seller/product", sellerAuthMiddle, productMiddle, addProductController);
router.post("/seller/category", sellerAuthMiddle, addCategoryController);

module.exports = router