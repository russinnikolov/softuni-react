const express = require("express");
const controllers = require("../controllers/index");
const router = express.Router();

router
	.route("/user/:id")
	.get(controllers.getUser)
	.put(controllers.updateUser)
	.delete(controllers.deleteUser);


module.exports = router;