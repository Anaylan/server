const jwt = require("jsonwebtoken");
const { users } = require("../models");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const config = require("config");

const accessTokenSecret = config.get("ACCESS_TOKEN_SECRET");
const refreshTokenSecret = config.get("REFRESH_TOKEN_SECRET");

// Получение пользователя по ID
const getUserById = async (req, res) => {
	try {
		await users
			.findOne({
				where: {
					id: req.params.id,
				},
			})
			.then((user) => {
				res.json(user);
			});
	} catch (error) {
		console.log(error);
	}
};

// Получение всех пользователей
const getUsers = async (req, res) => {
	try {
		const accounts = await users.findAll({
			attributes: ["id", "username"],
		});
		res.json(accounts);
	} catch (error) {
		console.log(error);
	}
};

// Регистрация
const register = (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({
			errors: errors.array(),
		});
	}

	users
		.findOne({
			where: { username: req.body.username },
		})
		.then((user) => {
			if (user) {
				return Promise.reject({
					statusCode: 422,
					message: "Этот пользователь уже зарегистрирован!",
				});
			} else {
				const { username, password } = req.body;
				const salt = bcryptjs.genSaltSync(10);
				const passwordHash = bcryptjs.hashSync(password, salt);
				return users.create({ username, password: passwordHash });
			}
		})
		.then((user) => {
			res.json(user);
		})
		.catch((statusCode, message) => {
			res.status(errors.statusCode || 400).json({
				error: errors.message,
			});
		});
};

// Вход
const login = async (req, res) => {
	try {
		const user = await users.findOne({
			where: {
				username: req.body.username,
			},
		});
		const match = await bcryptjs.compare(req.body.password, user.password);
		if (!match)
			return res
				.status(400)
				.json({ msg: "Неправильное имя пользователя/пароль" });
		const userId = user.id;
		const username = user.username;
		console.log();
		const accessToken = jwt.sign({ userId, username }, accessTokenSecret, {
			expiresIn: "15s",
		});

		const refreshToken = jwt.sign({ userId, username }, refreshTokenSecret, {
			expiresIn: "1d",
		});
		await users.update(
			{ refresh_token: refreshToken },
			{
				where: {
					id: userId,
				},
			}
		);
		res.cookie("refreshToken", refreshToken, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 10,
		});
		res.json({ accessToken });
	} catch (error) {
		console.log(error);
		res.status(404).json({ msg: "Пользователь не найден" });
	}
};

// Выход
const logout = async (req, res) => {
	const refreshToken = req.cookies.refreshToken;
	if (!refreshToken) return res.sendStatus(204);
	const user = await users.findAll({
		where: {
			refresh_token: refreshToken,
		},
	});
	if (!user[0]) return res.sendStatus(204);
	const userId = user[0].id;
	await users.update(
		{ refresh_token: null },
		{
			where: {
				id: userId,
			},
		}
	);
	res.clearCookie("refreshToken");
	return res.sendStatus(200);
};

module.exports = {
	getUserById,
	getUsers,
	register,
	login,
	logout,
};
