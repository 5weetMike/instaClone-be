const {Router} = require("express");
const userRouter = Router();
const {addUser} = require("./controllers");
const {login} = require("./controllers");
const { hashPass } = require("../middleware/auth");
const {comparePass} = require("../middleware/auth")

userRouter.post("/users/signup", hashPass, addUser);
userRouter.post("/users/login", comparePass, login);

module.exports = userRouter;