import sequelize from "./src/config/db.config.js"
import app from './src/app.js'
import 'dotenv/config'

import './src/models/Product.model.js'

const main = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync({ force: true, alter: true })
		const PORT = process.env.PORT || 5000
		app.listen(PORT, () =>
			console.log(`Server Listening on port => ${PORT}🔥🔥🔥`)
		)
	} catch (err) {
		console.log(`Something went wrong, Error => ${err}`)
	}
}

main()
