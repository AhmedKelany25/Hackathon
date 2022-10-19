const {spawn} = require('child_process')

function deployTf(req,res){
const child = spawn('/bin/bash',[__dirname + '/apply.sh']);
child.stdout.on('data',data=>{
    console.log(`\n${data}`)
})
}



module.exports ={
    deployTf
}