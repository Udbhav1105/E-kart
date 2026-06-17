import express from 'express'

import { login, register, reVerify, verify,isAvailable, logout, cart, addToCart, remove, verifyUser, checkAuth} from '../controllers/userController.js'

const router=express.Router()

router.post('/register',register)
router.post('/verify/:token',verify)
router.post('/reverify',reVerify)
router.post('/login',login)
router.get('/isavailable',verifyUser, isAvailable)
router.post('/logout',logout)
router.get('/cart',cart)
router.post('/addToCart',addToCart)
router.post('/cart/remove',remove)
router.post('/auth',checkAuth)


export default router