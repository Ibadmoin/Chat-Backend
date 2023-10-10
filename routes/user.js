import express from 'express';

const router = express.Router();

const users = [
    {
        id: 1,
        name: "ghous",
        email: "ghousAhmed",
    },
    {
        id: 2,
        name: "Ibad",
        email: "ibadmoin@gmail.com",
    },
]

router.get("/",(req,res)=>{
    res.status(200).send({users : users});


});



export default router;