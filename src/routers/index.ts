import express from "express";
import  authRouter from './authRoute'
import userRouter from './userRoute'
import { auth } from '../middleware/auth'

const router:express.Router = express.Router()

router.use("/",authRouter)
router.use("/user",auth,userRouter)

export default router