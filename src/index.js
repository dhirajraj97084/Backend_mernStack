
import express from 'express';
import connectDB from './db/database.js';


const app=express();
const port=process.env.PORT||8000;
connectDB();



app.listen(port,()=>{
    console.log(`your server start localhost:${port}`)
})