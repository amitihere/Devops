const express = require("express")
const router = express.Router()
const {signupMiddle,loginMiddle} = require("../middlewares/authentication")
const {signupController,loginController} = require("../controllers/userController")

router.post("/auth/signup", signupMiddle, signupController);
router.post("/auth/login", loginMiddle, loginController);
router.get("/catalog", (req, res) => {
    res.json({message: "Welcome to the catalog!"})
})
router.post("/shop/items/cart")  // this route for items in the cart, this must be remove after 3 days and not more than 5 can be added.
router.get("shop/availableItems/cart")


module.exports = router