const express = require("express")
const router = express.Router()

const {validateUser} = require("../middlewares/authentication")

router.post('/',validateUser)

module.exports = router