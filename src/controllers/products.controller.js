import Product from '../models/Product.model.js'
import { deleteFile } from '../middlewares/uploadCloud.middleware.js'

export const getAllProducts = async (req, res) => {
	try {
		const products = await Product.findAll()

		res.status(201).json({
			code: 201,
			message: 'Found all products Products',
			data: products
		})
	} catch (err) {
		res.status(500).json({
			code: 500,
			message: `Error to find products, ${err.message}`
		})
	}
}

export const addProducts = async (req, res) => {
	const { photoName, description, price } = req.body

	try {
		const productCreated = await Product.create({
			photoName,
			description,
			price: Number(price),
			img: req.photoImage,
			ImagePath: req.photoImage,
			publicIdImage: req.imageId
		})

		res.status(201).json({
			code: 201,
			message: 'Product created',
			data: productCreated
		})
	} catch (err) {
		deleteFile(req.imageId)
		res.status(500).json({
			code: 500,
			message: `Error to create the product, ${err.message}`
		})
	}
}
