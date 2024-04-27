
import express from 'express';
import connectDB from './db/database.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app=express();
const port=process.env.PORT||8000;
// middleware
app.use(cors({
    origin:process.env.COURCE_ORIGIN
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cookieParser());

connectDB();

app.listen(port,()=>{
    console.log(`your server start localhost:${port}`)
})