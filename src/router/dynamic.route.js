import express from "express"
import checkauth from '../middleware/auth/user.auth.js'
import updatetask from '../controller/dynamic/update.task.js'
import updatestatus from '../controller/dynamic/update.status.js'
import deletesingle from '../controller/dynamic/delete.singletask.js'

const dynamicrouter = express.Router();

//api to update the selected task
dynamicrouter.patch("/updatetask/:id",checkauth,updatetask);

//api to update the status 
dynamicrouter.patch("/updatestatus/:id",checkauth,updatestatus);

//api to delete single task from the user
dynamicrouter.delete("/deletesingle/:id",checkauth,deletesingle)

export default dynamicrouter;