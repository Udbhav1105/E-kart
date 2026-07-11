import express from 'express'
import { createOrder, key } from '../controllers/paymentController.js'

const router=express.Router()

router.post('/',createOrder)
router.get('/key',key)

export default router