import { body } from "express-validator";


const taskvalidation = [
    body("task")
    .isString()
    .withMessage("task should be a valid string")
    .notEmpty()
    .withMessage("task should not be empty ")

]

export default taskvalidation;