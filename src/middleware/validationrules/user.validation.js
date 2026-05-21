import { body } from "express-validator";

const uservalidation = [
  body("username")
    .isString()
    .withMessage("username should be a valid string ")
    .notEmpty()
    .withMessage("username should not be empty "),

  body("email").isEmail().withMessage("should be a valid email"),

  body("password")
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minSymbols: 1,
      minNumbers: 0,
      minUppercase: 0,
    })
    .withMessage(
      "password should contain length of 6 and 1 lowercase 1 symbol in it ",
    ),
];


export default uservalidation;