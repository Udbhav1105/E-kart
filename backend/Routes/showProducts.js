import express from 'express'
import {showProducts} from '../controllers/showProducts.js'

const router=express.Router()

router.get('/',showProducts)

export default router