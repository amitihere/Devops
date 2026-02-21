const express = require("express")
const router = express.Router()
const {signupMiddle,loginMiddle} = require("../middlewares/authentication")
const {signupController,loginController} = require("../controllers/userController")

router.post("/auth/signup", signupMiddle, signupController);
router.post("/auth/login", loginMiddle, loginController);

module.exports = router