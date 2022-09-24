const express = require("express")
const {emailSendforAdmin,changePasswordforAdmin} = require("../controller/forgotPasswordAdmin_controller")
const router = express.Router()
router.route("/emailSendforAdmin").post(emailSendforAdmin)
router.route("/changePasswordforAdmin").post(changePasswordforAdmin)
module.exports = router
