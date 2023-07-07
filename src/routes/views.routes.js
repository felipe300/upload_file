import { Router } from 'express'
import { getProfile, getViews } from '../controllers/view.controller.js'
import { verifyToken } from '../middlewares/auth.middlerare.js'

const router = new Router()

router.use(['/', '/home'], verifyToken, getViews)
router.use('/profile', verifyToken, getProfile)

export default router
