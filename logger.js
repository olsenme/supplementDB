function logger(req,res,next){
    console.log("Received a request:",req.url,req.method);
    next();
}
module.exports = logger;
