import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config({path:'./.env'});
import connectDb  from "./db/db.js";

const port =  process.env.PORT || 5000 
app.use(express.json())
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});

connectDb();