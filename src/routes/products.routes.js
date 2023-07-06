import { Router } from 'express'
import { addProducts, getAllProducts } from '../controllers/products.controller.js'

import upload from '../middlewares/uploadCloud.middleware.js'

const router = Router()

router.get('/', getAllProducts)
router.post('/', upload, addProducts)

export default router
