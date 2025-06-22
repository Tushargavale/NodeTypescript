import {NextFunction, Request,Response,Router } from "express";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { createJWT } from "../Helper/JWT";
import {finduser,getUser,adduser} from '../DB/Auth'
import {v4} from 'uuid'
import { User } from "../DummyData/user";
dotenv.config()

const Authrouter=Router() 

const saltround=process.env.SALT 

const secret=process.env.JWTSECRET as string


 function Authenticate(req:Request,resp:Response,next:NextFunction){
    try {
       let authheader=req.headers.authorization || req.cookies.token
       if(!authheader)
        resp.status(401).json({message:'No Token Provoded'}) 

       let token=authheader.split('Bearer ')[1]
       let decode=jwt.verify(token,secret)  
       console.log(decode)
        // (req as any).user=decode
  
      next()
  
    } catch (error) {
        resp.status(401).send({message:'user is not Authenticated'})
    }
}





Authrouter.post('/login',async(req:Request,resp:Response)=>{

    console.log(v4())
    try {
        const {username,password}=req.body 
        let isuserPresent=await finduser(username)
        console.log(isuserPresent,'****')
        if(!isuserPresent)
            throw new Error('User not found')
        let user=await getUser(username)
        if(!user)
            throw new Error('user not found')
        console.log(user)
        
        const isMatch=await bcrypt.compare(password,user.password)
        if(isMatch)
        {
            let token=createJWT({username},'1h') 
             resp.status(200).send({token})
        }else{
             resp.status(401).send({message:'Wrong password'})
        }
    } catch (error) {
         resp.status(401).send({ message: (error as Error).message || 'Authentication failed' });
    }

})


Authrouter.post('/register',async(req:Request,resp:Response)=>{
    try {
        let {username,password,email,role}=req.body
        let userID=v4()
        let hashPass= await bcrypt.hash(password,7)
        const user:User={
            username,
            password:hashPass,
            email,
            role,
            userID
        }
        
        let usr=await adduser(user)
        resp.status(200).send(usr)
      
    } catch (error) {
        resp.status(401).send(error)
    }
})








Authrouter.post('/protected',Authenticate,(req:Request,resp:Response)=>{
    resp.send({message:'Protected EOute'})
})


export default Authrouter