import express from 'express'
import { createOrder, key, verifypayment } from '../controllers/paymentController.js'

const router=express.Router()

router.post('/',createOrder)
router.get('/key',key)
router.post('/verify',verifypayment)

export default router