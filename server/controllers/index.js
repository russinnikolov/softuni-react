const AppError = require("../utils/appError");
const conn = require("../services/db");
const md5 = require("blueimp-md5");
const jwt = require("jsonwebtoken");

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
	if (!req.body) return next(new AppError("No user data found", 404));
	req.body.password = md5(req.body.password);
	conn.query(
		"INSERT INTO user (name, email, password) VALUES(?, ?, ?)",
		[req.body.name, req.body.email, req.body.password],
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
		req.params.id,
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
		"UPDATE user SET ? WHERE id=?",
		[req.body, req.params.id],
		function (err, data, fields) {
			if (err) return next(new AppError(err, 500));
			res.status(200).json({
				status: "success",
				message: "User updated!",
			});
		}
	);
};

exports.deleteUser = (req, res, next) => {
	if (!req.params.id)
		return next(new AppError("Requested User could not be found", 404));

	conn.query(
		"DELETE FROM user WHERE id=?",
		req.params.id,
		function (err, fields) {
			if (err) return next(new AppError(err, 500));
			res.status(200).json({
				status: "success",
				message: "User deleted!",
			});
		}
	);
}

exports.login = (req, res, next) => {
	if(!req.params)
		return next(new AppError("No data provided", 404));

	conn.query(
		"SELECT * FROM user WHERE email=?",
		req.body.email,
		function (err, fields) {
			if (err) return next(new AppError(err, 500));
			if(fields[0].password === md5(req.body.password)) {
				const token = jwt.sign(
					{ userId: fields[0].id },
					'RANDOM_TOKEN_SECRET',
					{ expiresIn: '24h' });
				res.status(200).json({
					userId: fields[0].id,
					accessToken: token
				});
			}
		}
	)

}