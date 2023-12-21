import { Router } from "express";
import {login, register} from '../controllers/authcontroller'
const router: Router = Router();
import Validator from '../utils/validateRequest'
import loginValidate from '../utils/validation/loginvalidate'
import  registerValidate  from "../utils/validation/registervalidate";

router.post("/login",Validator(loginValidate), login)

router.post("/register",Validator(registerValidate), register)


export default router;
