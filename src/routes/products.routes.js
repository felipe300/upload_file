import { Router } from 'express'
import { addProducts, getAllProducts } from '../controllers/products.controller.js'

import { uploadFiles } from '../middlewares/uploadCloud.middleware.js'
import { validateIsAdmin, verifyToken } from '../middlewares/auth.middlerare.js'

const router = Router()

router.get('/', getAllProducts)
router.post('/', verifyToken, validateIsAdmin, uploadFiles, addProducts)

export default router
