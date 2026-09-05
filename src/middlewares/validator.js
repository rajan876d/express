import z, {ZodError} from "zod";
const validate = (Schema)=>(req,res,next)=>{
    if(!req.body){
        return res.status(400).json({message:"Invalid data"});
    }
    try{
        Schema.parse(req.body);
        next();
    }
    catch(error){
        console.log(error);
        if (error instanceof ZodError){
          const formattedError =  z.formatError(error)
          return res.status(400).json(formattedError);
        }
        return res.status(400).json({message:error.message});
    }
}
export default validate;