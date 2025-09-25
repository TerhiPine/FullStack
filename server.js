const http = require("http");

http.createServer(function (request, response) {
    // Tell the browser we are sending an HTML page
    response.writeHead(200, {'Content-Type': 'text/html'});

    // Send the HTML content
    response.end('My First Node.js Server');

}).listen(8081); // The server will listen on "port 8081"

console.log('Server is running at http://127.0.0.1:8081/');