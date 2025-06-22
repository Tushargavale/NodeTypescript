import express,{Request,Response} from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import Authrouter from './Route/AuthRoute'
import bcrypt from 'bcrypt'
dotenv.config()
import jwt from 'jsonwebtoken'

let jwtkey=process.env.JWTSECRET || '' 

import { createconnection } from './DB/DBconfiguration'


// import { createconnection } from './DB/DBconfiguration'

// const token=jwt.sign({username:'username'},jwtkey,{expiresIn:'1 hr'})
 //const decode= jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNzQ5ODM1OTcxLCJleHAiOjE3NDk4Mzk1NzF9.MFrKmkU6CfRiqWC_5cOTV7Hy2_MYK3l_uE6cSp4cfy0',jwtkey)



// console.log(decode)



const app=express() 
// createconnection()
// createconnection()
app.use(bodyParser.json())
app.use('/',Authrouter)




app.get('/hello',(req:Request,resp:Response)=>{
    resp.send('HELLO WELCOME')
})






app.listen(process.env.PORT,(err)=>{
    console.log('Server is running on port ',process.env.PORT,err)
})









console.log(process.env.PORT)