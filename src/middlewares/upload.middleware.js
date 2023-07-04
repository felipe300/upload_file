import * as path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const uploadFiles = (req, res, next) => {
	const photo = req.files.photo
	const allowformats = ['jpeg', 'png', 'webp', 'gif', 'svg']
	const ext = `${photo.mimetype.split('/')[1]}`

	if (!allowformats.includes(ext)) {
		return res.status(400).json({
			code: 400,
			message: `not allow ${ext} format, allow formats(${allowformats.join(' - ')})`
		})
	}
	const photoName = `${Date.now()}-img.${ext}`
	const destinyPath = path.join(__dirname, '/../../public/uploads', photoName)

	photo.mv(destinyPath, async (err) => {
		if (err) {
			return res
				.status(500)
				.json({
					code: 500,
					message: `Error to upload the image, ${err.message}`
				})
		}

		req.photoImage = photoName
		req.pathImage = destinyPath
		next()
	})
}

export default uploadFiles
