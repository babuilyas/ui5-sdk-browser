const express = require('express');
const app = express();
const getPort = require('get-port');
const open = require('open');
const fs = require('fs');

app.use(express.static('./'));

app.get('/', (req, res) => {
    if(fs.existsSync(__dirname + '/index.html'))
    res.sendFile( __dirname + '/index.html');
    else
    res.sendFile( __dirname + '/test.html');
});

(async ()=>{
const port = await getPort({port: 3000});

await app.listen(port,()=>{       
    console.log(`server listening at http://localhost:${port}`);
});

if(fs.existsSync(__dirname + '/index.html'))
await open(`http://localhost:${port}/index.html`);
else
await open(`http://localhost:${port}/test.html`);
})();