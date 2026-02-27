const express = require("express")
const router = express.Router()
const {signupMiddle,loginMiddle} = require("../middlewares/authentication")
const {signupController,loginController} = require("../controllers/userController")

router.post("/auth/signup", signupMiddle, signupController);
router.post("/auth/login", loginMiddle, loginController);
router.get("/catalog", (req, res) => {
    res.json({message: "Welcome to the catalog!"})
})
router.get("/catalog/items", (req, res) => {
    const items = [
        { id: 1, name: "Item 1", price: 10 },
        { id: 2, name: "Item 2", price: 20 },
        { id: 3, name: "Item 3", price: 30 },
    ]
    res.json(items)
})


module.exports = router