const logger = (req,res,next) =>{
    const httpMethid =req.method;
    const url = req.originalUrl;

    console.log(`${httpMethid} ${url}`);
    next();

};

export default logger;