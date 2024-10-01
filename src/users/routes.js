const {Router} = require("express");
const userRouter = Router();
const {addUser} = require("./controllers");
const {login} = require("./controllers");

userRouter.post("/users/signup", addUser);
userRouter.post("/users/login", login);



module.exports = userRouter;