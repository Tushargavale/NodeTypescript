const express = require('express');
const fs=require('fs')
const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());



const AsyncHandler=(fun)=>{
  return (req,resp,next)=>{
   Promise.resolve(fun(req,resp,next)).catch(e=>next(e))
  }
}



const LoginUser=AsyncHandler((req,resp,next)=>{
    throw new Error('user Not Found')
})


app.get('/',LoginUser)




app.use((err,req,resp,next)=>{
  if(err)
    resp.status(500).json({message:'Something is Wrong',Error:err.message})
})








// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
