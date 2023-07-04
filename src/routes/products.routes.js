import { Router } from 'express'
import { addProductos, getAllProducts } from '../controllers/products.controller.js'

const router = Router()

router.get('/', getAllProducts)
router.get('/', addProductos)

export default router