const fs = require('fs')
function sendFileTf(req,res){


    let tfFile = __dirname + "/output/dev/subnets/terraform.tf"

fs.access(tfFile,fs.constants.F_OK, err=>{
    console.log(`${tfFile} ${err ? "does not exist": "exist"}`)
})

fs.readFile(tfFile,function(err,content){
    if(err){
        res.writeHead(404,{ "Content-type":"text/html"});
        res.end("No Such File")
    }else{
        res.writeHead(200,{"Content-type":"text/tf"})
        res.end(content)
    }
})
}


module.exports ={
    sendFileTf
}