const AppError = require("../utils/appError");
const conn = require("../services/db");
const md5 = require("blueimp-md5");
const jwt = require("jsonwebtoken");

const User = require("../models/auth.model");

exports.login = (req, res, next) => {
	if(!req.params)
		return next(new AppError("No data provided", 404));

	User.login(req.body, (err, data) => {
		if(err) {
			res.status(500).send({
				message:
					err.message || "Some error occurred while login."
			});
		}
		else {
			res.send(data)
		};
	});
}

exports.register = (req, res) => {
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
	}

	User.register(req.body, (err, data) => {
		if(err) {
			res.status(500).send({
				message:
					err.message || "Some error occurred while register."
			});
		}
		else {res.send(data);}
	});
}