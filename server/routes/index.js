const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/user").get(controllers.getAllUsers).post(controllers.createUser);
router
	.route("/user/:id")
	.get(controllers.getUser)
	.put(controllers.updateUser)
	.delete(controllers.deleteUser);

router.route("/user/login").post(controllers.login);

module.exports = router;