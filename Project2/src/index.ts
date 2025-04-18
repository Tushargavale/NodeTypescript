import express ,{Request,Response} from 'express';

import { getClient } from './DB/dbconfig';
import router from './Route/toDoRoute';

// import usersRouter from './routes/users'


const app=express()

const PORT=3000;


app.use('/',router)


// async function showstudent(req:Request,resp:Response) {
   
//     try {
//          const client=await getClient()
//          let data=await client.query('select * from students')
//          resp.send(data[0])
//     } catch (error) {
//         resp.send('ERROR')
//         console.log(error)
//     }
// }

// // app.use('/api/users',usersRouter)
// app.get('/',(req:Request,resp:Response)=>{
//     resp.send({message:'Server is Started'})
// })

// app.get('/b',showstudent)



app.listen(PORT,()=>{
    console.log(`Server is  Running on ${PORT}`)
})

