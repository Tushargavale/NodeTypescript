import express ,{Request,Response} from 'express';

import usersRouter from './routes/users'


const app=express()

const PORT=3000;

app.use('/api/users',usersRouter)




app.listen(PORT,()=>{
    console.log(`Server is ??? Running on ${PORT}`)
})


