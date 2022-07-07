const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllUsers = (req, res, next) => {
	conn.query("SELECT * FROM user", function (err, data, fields) {
		if(err) return next(new AppError(err))
		res.status(200).json({
			status: "success",
			length: data?.length,
			data: data,
		});
	});
};

exports.createUser = (req, res, next) => {
	console.log(req);
	if (!req.body) return next(new AppError("No user data found", 404));
	conn.query(
		"INSERT INTO user (name, email, password) VALUES(?)",
		[...req.body],
		function (err, data, fields) {
			if (err) return next(new AppError(err, 500));
			res.status(200).json({
				status: "success",
				message: "User created!",
			});
		}
	);
};

exports.getUser = (req, res, next) => {
	if (!req.params.id) {
		return next(new AppError("Requested User could not be found", 404));
	}
	conn.query(
		"SELECT * FROM user WHERE id = ?",
		[req.params.id],
		function (err, data, fields) {
			if (err) return next(new AppError(err, 500));
			res.status(200).json({
				status: "success",
				length: data?.length,
				data: data,
			});
		}
	);
};

exports.updateUser = (req, res, next) => {
	if (!req.params.id) {
		return next(new AppError("Requested User could not be found", 404));
	}
	conn.query(
		"UPDATE todolist SET ? WHERE id=?",
		[...req.body],
		[req.params.id],
		function (err, data, fields) {
			if (err) return next(new AppError(err, 500));
			res.status(200).json({
				status: "success",
				message: "todo updated!",
			});
		}
	);
};

exports.deleteUser = (req, res, next) => {
	if (!req.params.id) {
		return next(new AppError("Requested User could not be found", 404));
	}
	conn.query(
		"DELETE FROM user WHERE id=?",
		[req.params.id],
		function (err, fields) {
			if (err) return next(new AppError(err, 500));
			res.status(200).json({
				status: "success",
				message: "User deleted!",
			});
		}
	);
}