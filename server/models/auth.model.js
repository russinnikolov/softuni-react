const AppError = require("../utils/appError");
const conn = require("../services/db");
const md5 = require("blueimp-md5");
const jwt = require("jsonwebtoken");

const User = function(userData) {
	this.userName = userData.userName;
	this.email = userData.email;
	this.password = userData.password;
	this.fName = userData.fName;
	this.lName = userData.lName;
	this.street = userData.street;
	this.city = userData.city;
	this.country = userData.country;
	this.type = userData.type;
}

User.register = (newUser, result) => {
	newUser.password = md5(newUser.password);
	conn.query(
		"INSERT INTO user SET ?", newUser,
		(err, res)  => {
			if(err) {
				result(err, null);
				return;
			}

			const token = jwt.sign({ userId: res.insertId },
				'RANDOM_TOKEN_SECRET', { expiresIn: '24h' });

			result(null, { id: res.insertId, username: newUser.userName, email: newUser.email, accessToken: token});
		}
	);
}

User.findByUserName = (userName, result) => {
	conn.query(
		"SELECT * FROM user WHERE userName = ?", userName,(err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}
		if (res.length) {
			result(null, res[0]);
			return;
		}

		result({ kind: "not_found" }, null);
	});
};


User.login = (user, result) => {
	User.findByUserName(user.userName, (err, _user) => {
		if(md5(user.password) !== _user.password) {
			result({message: 'Wrong Password'}, null);
		} else {
			const token = jwt.sign({userId: _user.id},
				'RANDOM_TOKEN_SECRET', {expiresIn: '24h'});

			result(null, {accessToken: token, userName: user.userName});
		}
	})
}

module.exports = User;