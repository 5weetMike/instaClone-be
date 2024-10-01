const bcrypt = require("bcrypt");
const salt = parseInt(process.env.SALT);
const User = require("../users/models");



const hashPass = async (req, res, next) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPass;
        next();
    }catch(error){
        res.status(501).json({message: error.message, error: error});
    }
};

const comparePass = async (req, res, next) => {
    console.log(req.body)
    try{
        const user = await User.findOne({where: {username:req.body.username}});
        const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) {
            return res.status(404).json ({message:"incorrect password my G!"})};
        req.user = user;
        next();
    }catch(error){
        res.status(501).json({message: error.message, error: error});

    }
};
module.exports = {
    hashPass: hashPass,
    comparePass: comparePass,

};