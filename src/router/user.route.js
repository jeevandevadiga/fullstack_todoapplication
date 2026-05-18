import express from "express";
import addtask from "../controller/user/user.task.js";
import checkauth from "../middleware/auth/user.auth.js";
import getusertask from "../controller/user/get.usertask.js";
import getpendingtask from '../controller/user/pending.task.js'
import getcompletedtask from '../controller/user/get.finishedtask.js'
import deletealltask from '../controller/user/deleteall.task.js'

const userrouter = express.Router();

//api to add the tasks into the database
userrouter.post("/savelist", checkauth, addtask);

//api to fetch all the data from the database (current user )
userrouter.get("/gettask", checkauth, getusertask);

//api to get the pending task of the current user 
userrouter.get("/getpendingtask",checkauth,getpendingtask);

//api to get the finished tasks from the user
userrouter.get("/getcompletedtask",checkauth,getcompletedtask)

//api to delete all the task of the current user 
userrouter.delete("/deletalltask",checkauth,deletealltask)


export default userrouter;
