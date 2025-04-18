import express,{Request,Router,Response,} from 'express'
import Users from '../User'
import jwt from "jsonwebtoken"
import { user } from '../User'
import bcrypt from 'bcrypt'


const SECRET_KEY='YGOYDOGCHEDYEBJLKSBLUEEEEEEVBLYGEFYWDYEB'
const Authrouter=Router()

function findUser(username:string):user | undefined{
    for(let i:number=0;i<Users.length;i++)
    {
        if(Users[i].username==username)
            return Users[i]
    }

    return undefined
}

Authrouter.get('/user',(req:Request,resp:Response)=>{
    resp.status(200).json({name:'Tushar'})
})


async function generateToken(user:user):Promise<string>{
    let token=jwt.sign(user,SECRET_KEY,{expiresIn:'1hr'})
     return token
}



Authrouter.post('/login',async(req:Request,resp:Response)=>{
     const {username,password}=req.body 
    const user=findUser(username)
    if(!user)
        resp.send(401).send('invalid credential...')

    // let HashPass= bcrypt.compare()
    
    
})






export default Authrouter
