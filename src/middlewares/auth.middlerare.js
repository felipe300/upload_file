import jwt from 'jsonwebtoken'
import User from '../models/User.model.js'
import 'dotenv'

export const emitToken = async (req, res, next) => {
	try {
		const { email, password } = req.body

		const user = await User.findOne({
			where: { email, password },
			attributes: ['id', 'username', 'rut', 'email', 'admin']
		})

		if (user === null) {
			res.status(400).send({ code: 400, message: 'authentication error' })
		}

		const token = jwt.sign(JSON.stringify(user), process.env.SECRET_TOKEN)
		req.token = token
		next()
	} catch (err) {
		return console.log(`Error to generate token. ${err.message}`)
	}
}

export const verifyToken = async (req, res, next) => {
	try {
		let token = req.headers.authorization
		token = token.split(' ')[1]

		if (token.length === 0) {
			throw new Error('There is no token')
		}

		jwt.verify(token, process.env.SECRET_TOKEN, async (err, decoded) => {
			if (err) {
				return res.status(401).send({
					code: 401,
					message: `Must be provide a valid token! ${err.message}`
				})
			}

			const user = await User.findByPk(decoded.id)

			if (!user) {
				return res.status(400).json({
					code: 400,
					message: `User does not belongs to the system anymore! ${err.message}`
				})
			}

			req.user = decoded
			next()
		})
	} catch (err) {
		return console.log(`Error to generate token. ${err.message}`)
	}
}

export const validateIsAdmin = async (req, res, next) => {
	try {
		const user = req.user

		if (!user.admin) {
			return res.status(403).json({
				code: 403,
				message:
					'User is not an admin, User is not allow to create products'
			})
		}
		next()
	} catch (err) {
		return console.log(`User is not allow to create products! ${err.message}`)
	}
}
