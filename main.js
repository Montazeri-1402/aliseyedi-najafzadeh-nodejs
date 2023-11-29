const http = require('http');
const url = require('url');
const calculator = require('./Modules/calculator');
const hello = require('./Modules/hello');

const port = 8080;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.query.name) {
        const result = hello.sayhi(parsedUrl);
        res.end(String(result));
    } else if (parsedUrl.query.num1 && parsedUrl.query.num2 && parsedUrl.query.operator) {
        const result = calculator.math(parsedUrl);
        res.end(String(result));
    } else {
        res.end("there is no proper request");
    }
}).listen(port, () => {
    console.log("👀 server listening on port:" + port);
});
