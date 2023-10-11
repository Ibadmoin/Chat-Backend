import express from 'express';
import cors from "cors";
const app = express()
import dotenv from 'dotenv'
dotenv.config({path: "./.env"})

import connectDb  from "./db/db.js";
import router from './routes/index.js';

const port =  process.env.PORT || 5000 
app.use(cors());
app.use(express.json());

app.use("/",(req,res,next)=>{
    console.log(`agai request ${req.query}`);
    if(req?.query?.apikey === "123"){
        next();
    }else{
        res.status(401).send({message: "not allowed!"});
    }
})

app.use("/api",router);
















app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});

connectDb();

