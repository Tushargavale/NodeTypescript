import { Router } from "express";
import { getAll } from "../Controller/todoController";
const router=Router()

router.get('/all',getAll)




export default router