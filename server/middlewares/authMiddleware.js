const jwt=require("jsonwebtoken");
 require('dotenv').config();
const authMiddleware =(req,res,next)=>{
const Authorization= req.headers.Authorization || req.headers.authorization;
if(Authorization && Authorization.startsWith("Bearer"))
    {
const token=Authorization.split(" ")[1];
jwt.verify(token, process.env.JWTKEY,(err,info)=>{

    if(err){
        return  res.status(401).json({error:"Unauthorized. no token found"})

    }

    req.user=info;
    
    next();
})
    }else{
      return  res.status(401).json({message:"Unauthorized. no token found"})
    }
    

}

module.exports = {authMiddleware};