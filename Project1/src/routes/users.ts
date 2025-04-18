import {Router} from 'express'
import { getUSers } from '../handlers/users'


const router=Router()



// We need to go to actually /api/users
router.get("/",getUSers)



export default router