var http = require('http');
function requestHandler(req,res){
    console.log("Request received");
    console.log(" -method", req.method);
    console.log(" -url", req.url);
    console.log("-headers", req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Welcome to my application</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
}
var server = http.createServer(requestHandler);
server.listen('5000', function(err){
    if(err){
        throw err;
    }
        console.log("Server is listening on port 5000");
});
