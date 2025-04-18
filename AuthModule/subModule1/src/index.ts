import  express,{Request,Response } from "express";

const app=express()  
const PORT=3000



app.get('/',(req:Request,resp:Response)=>{
    resp.send('Server is Running ...')
})




app.listen(PORT,()=>{
    console.log(`Server is Runninng on Port ${PORT}`)
})


