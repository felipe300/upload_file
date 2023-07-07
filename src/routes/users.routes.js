import { Router } from 'express'
import { addUsers, getAllUsers, login } from '../controllers/users.controller.js'
import { emitToken } from '../middlewares/auth.middlerare.js'

const router = Router()

router.post('/', addUsers)
router.get('/', getAllUsers)
router.post('/login', emitToken, login)

export default router
