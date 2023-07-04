import upload from 'express-fileupload'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routerProducts from './routes/products.routes.js'

const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))
app.use(upload())

app.get('/api/v1/products', routerProducts)


export default app	