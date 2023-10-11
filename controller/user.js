import express from "express";
import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import joi from "joi";
// verifytoken from middleware here..

// import 'dotenv/.env';

const router = express.Router();

const UserSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  phone: joi.number().optional().min(10),
  password: joi
    .string()
    .required()
    .min(8)
  
});

// signup api.........
    
router.post("/", async (req, res) => {
  try {
    await UserSchema.validateAsync(req.body);
    const password = await bcrypt.hash(req.body.password, 10);
    const user = new User({ ...req.body, password });
    const newUser = await user.save();
    // token work here...

    return res
      .status(200)
      .send({
        status: 200,
        message: "sucessfully added new user",
        user: newUser,
      });
  } catch (err) {
    return res.status(400).send({ status: 400, message: err.message });
  }
});

export default router;
