// middleware/validation.js
import { validationResult } from "express-validator";

 const validationresult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map(err => ({
        field: err.param,
        message: err.msg
      }))
    });
  }

  next(); // continue if no errors
};


export default validationresult;