const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/users").get(controllers.getAllUsers).post(controllers.createUser);
router
	.route("/user/:id")
	.get(controllers.getUser)
	.put(controllers.updateUser)
	.delete(controllers.deleteUser);

module.exports = router;