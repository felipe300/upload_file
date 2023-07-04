import Sequelize from 'sequelize'
import 'dotenv/config'

const sequelize = new Sequelize(
	process.env.POSTGRES_DB,
	process.env.POSTGRES_USER,
	process.env.POSTGRES_PASS,
	{
		host: process.env.POSTGRES_HOST,
		dialect: 'postgres'
	}
)

export default sequelize
