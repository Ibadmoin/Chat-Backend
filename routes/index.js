import express  from "express";
import user from "../controller/user.js"
const router = express.Router();

router.use("/users",user);



export default router;