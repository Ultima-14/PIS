const http = require("http");

http.createServer((request,  response) => {
    
        response.end("Kulik Vitaliy | 2 course | IS-91"); 
   
}).listen(3000, () => {
    console.log("Port 3000");
});
