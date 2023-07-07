import { DataTypes } from 'sequelize'
import sequelize from '../config/db.config.js'

const User = sequelize.define(
	'users',
	{
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		rut: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		admin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			allowNull: false
		}
	},
	{
		timestamps: true,
		tableName: 'users'
	}
)

export default User
