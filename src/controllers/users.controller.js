import User from '../models/User.model.js'

export const addUsers = async (req, res) => {
	try {
		const { username, rut, email, password } = req.body

		await User.create({ username, rut, email, password })
		res.status(201).send({
			code: 201,
			message: 'User created successfully',
			data: { username, rut, email }
		})
	} catch (err) {
		return res.status(400).send({
			code: 400,
			message: `Error to create a new User. ${err.message}`
		})
	}
}

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll({
			attributes: {
				exclude: ['password', 'createdAt', 'updatedAt', 'admin']
			}
		})
		res.status(201).send({
			code: 201,
			message: 'Get all users successfully',
			data: users
		})
	} catch (err) {
		return res.status(400).send({
			code: 400,
			message: `Error to get all users. ${err.message}`
		})
	}
}

export const login = async (req, res) => {
	try {
		res.status(200).send({ code: 200, msn: 'login ok', token: req.token })
	} catch (err) {
		return res.status(400).send({
			code: 400,
			message: `Error to create a new User. ${err.message}`
		})
	}
}
