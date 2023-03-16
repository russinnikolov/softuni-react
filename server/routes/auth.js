const express = require("express");
const auth = require("../controllers/auth");
const router = express.Router();

router.route("/user/login").post(auth.login);
router.route("/user/register").post(auth.register);

module.exports = router;
