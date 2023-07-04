import app from './src/app.js'
import 'dotenv/config'

const PORT = process.env.PORT || 5000

const main = () => {
	app.listen(PORT, () => console.log(`Server running on port: ${PORT}🔥🔥🔥`))
}

main()
