const {Router} = require("express");
const userRouter = Router();
const {addUser} = require("./controllers");
// const {hashPass} = require("../middleware/auth");
const {login} = require("./controllers");
// const {comparePass} = require("../middleware/auth");
const {getAllUsers} = require("./controllers");


userRouter.post("/users/signup", addUser);
userRouter.post("/users/login", login);
userRouter.get("/user/getallusers", getAllUsers);


module.exports = userRouter;