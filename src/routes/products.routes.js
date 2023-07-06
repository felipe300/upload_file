import { Router } from 'express'
import { addProducts, getAllProducts } from '../controllers/products.controller.js'

import { uploadFiles } from '../middlewares/uploadCloud.middleware.js'

const router = Router()

router.get('/', getAllProducts)
router.post('/', uploadFiles, addProducts)

export default router
