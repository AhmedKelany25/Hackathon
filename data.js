const fs = require('fs');


function editData(req,res){
   let tf = { 
    region: req.body.region,
    project_name: req.body.projectName,
    vpc_cider: req.body.vpcCidr,
    public_cider : ["10.0.0.0/24","10.0.1.0/24"],
    private_cider :  ["10.0.2.0/24","10.0.3.0/24"],
    ebs_size: req.body.ebsSize,
    instance_type: req.body.instanceType,
    max_size: req.body.maxSize,
    min_size: req.body.minSize,
    desired_capacity: req.body.desiredCapacity,

    };
 
    let data = JSON.stringify(tf, null, 2);
    
    fs.writeFile('terraform.tfvars.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}
module.exports ={
    editData
}