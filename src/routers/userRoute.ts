import express from "express"
import {getAllUsers,deleteUser,updateUser} from "../controllers/usercontroller"

const router:express.Router = express.Router()

router.get("/",getAllUsers)

router.delete("/:id",deleteUser)

router.put("/:id",updateUser)
export default router