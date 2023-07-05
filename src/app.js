import upload from 'express-fileupload'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routerProducts from './routes/products.routes.js'

import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))
app.use(upload()) // req.files

app.use('/public', express.static(path.join(__dirname, '../public')))

app.use('/api/v1/products', routerProducts)

export default app
