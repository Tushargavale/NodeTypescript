import  express,{Request,Response } from "express";
import Authrouter from "./Routes/AuthRoute";
import bycrypt from 'bcrypt'


const app=express() 

app.use(express.json())
const PORT=3000

 async function generateHash(password:string):Promise<string>{
    const salt= await bycrypt.genSalt(10)
    const HashPass=await bycrypt.hash(password,salt)
    return Promise.resolve(HashPass)
}

generateHash('admin').then((data)=>console.log(data))




app.get('/',(req:Request,resp:Response)=>{
    resp.send('Server is Running ...')
})

app.use(Authrouter)


app.listen(PORT,()=>{
    console.log(`Server is Runninng on Port ${PORT}`)
})


