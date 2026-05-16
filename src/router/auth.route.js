import express from "express";
import userdetails from '../controller/auth/user.auth.js'
const authrouter = express.Router();

authrouter.post("/saveuser",userdetails);


export default authrouter;