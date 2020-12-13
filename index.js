var http = require('http');
var nStatic = require('node-static');
const open = require('open');
const fs = require('fs');
const getPort = require('get-port');

var fileServer = new nStatic.Server('./');

(async ()=>{
const port = await getPort({port: 45927});

http.createServer(function (req, res) {    
    fileServer.serve(req, res);
}).listen(port,()=>{       
    console.log(`server listening at http://localhost:${port}`);
});

if(fs.existsSync(__dirname + '/index.html'))
await open(`http://localhost:${port}/index.html`);
else
await open(`http://localhost:${port}/test.html`);
})();