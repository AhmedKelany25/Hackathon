const http = require('http');
const {  createUser } = require('./UserController')
const fs = require('fs')


const port = 3000

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        let html = fs.readFileSync('index.html')
        res.write(html);
        res.end();

    }else if(req.url === '/api/users' && req.method === 'GET') {
        createUser(req,res)

    }
})



server.listen(port,function(error){
    if(error){
        console.log('Something went wrong',error)
    }else{
        console.log('Server is listening on port'+port)
    }
})