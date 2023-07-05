import { DataTypes } from 'sequelize'
import sequelize from '../config/db.config.js'

const Product = sequelize.define(
	'products',
	{
		photoName: {
			type: DataTypes.STRING(50),
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		description: {
			type: DataTypes.STRING(100),
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		price: {
			type: DataTypes.DECIMAL(11, 2),
			allowNull: false,
			validate: {
				notEmpty: true,
				min: 0
			}
		},
		img: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ImagePath: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		timestamps: true,
		tableName: 'products'
	}
)

export default Product
