const jwt = require("jsonwebtoken")
require("dotenv").config();

const auth = async(req,res,next)=>{
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            if(err){
                res.status(404).send({isError: true,msg:"you are not authrized"});
            }else{
                next();
            }
        })
    }catch(err){
        res.status(500).send({isError: true,msg:err.message});
    }
}

module.exports={
    auth
}