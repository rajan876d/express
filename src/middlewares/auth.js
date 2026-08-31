import jwt from "../utils/jwt.js"
const auth = (req, res, next) =>{
    console.log(req.user);
   const cookie =req.headers.cookie;

   const token = cookie?.split("=")[1];
   try{
    const data = jwt.verifyToken(token);

    req.user =data;
    console.log(data);
    next();
}
catch(error){
    res.status(400).json({message:"Invalid token"});
}
    
}
    export default auth;
