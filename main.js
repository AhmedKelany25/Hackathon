// const http = require('http');
// const {  createUser } = require('./UserController')
// const {  sendFileTf } = require('./SendTf')
// const {  deployTf } = require('./deployTf')
// const fs = require('fs')  


// const port = 3000

// const server = http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization')
//     if(req.url === '/'){
//         res.writeHead(200,{'content-type':'text/html'})
//         let html = fs.readFileSync('index.html')
//         res.write(html);
//         res.end();

//     }else if(req.url === '/api/users' && req.method === 'GET') {
//         createUser(req,res)

//     }else if(req.url === '/api/sendFile' && req.method === 'GET') {
//         sendFileTf(req,res)

//     }else if(req.url === '/api/deployTf' && req.method === 'GET') {
//         deployTf(req,res)

//     }
// })



// server.listen(port,function(error){
//     if(error){
//         console.log('Something went wrong',error)
//     }else{
//         console.log('Server is listening on port'+port)
//     }
// })


///////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const {  deployTf } = require('./deployTf')
const {  editData } = require('./data')
const app = express();
const bodyParser = require("body-parser");
var cors = require('cors');


app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(bodyParser.json());



app.get('/api/deployTf', (req, res) => {

    deployTf(req,res)
});
app.post("/api/editFile", function (req, res) {

    editData(req,res)
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
