import { v2 as cloudinary } from 'cloudinary'
import 'dotenv'

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadFiles = (req, res, next) => {
	const photo = req.files.photo

	try {
		const allowformats = ['jpeg', 'png', 'webp', 'gif', 'svg']
		const ext = `${photo.mimetype.split('/')[1]}`

		if (!allowformats.includes(ext)) {
			return res.status(400).json({
				code: 400,
				message: `not allow ${ext} format, allow formats(${allowformats.join(' - ')})`
			})
		}

		cloudinary.uploader.upload_stream(
			{ resource_type: 'auto' },
			async (err, result) => {
				if (err) {
					return res
						.status(500)
						.json({
							code: 500,
							message: `Error to upload the image, ${err.message}`
						})
				}
				req.photoImage = photo.name
				req.pathImage = result.url
				req.imageId = result.public_id
				next()
			}).end(photo.data)
	} catch (err) {
		return res.status(500).send({
			code: 500,
			message: `Error to process ${err.message}`
		})
	}
}

export default uploadFiles
