import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GenerateTfService } from '../generate-tf.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  register = new FormGroup({
    region: new FormControl('eu-central-1'),
    projectName: new FormControl('HighAvailable'),
    vpcCidr: new FormControl('10.0.0.0/16'),
    ebsSize: new FormControl('20'),
    instanceType:new FormControl('t3.medium'),
    maxSize:new FormControl('4'),
    minSize:new FormControl('2'),
    desiredCapacity:new FormControl('2'),
  });

  constructor(public _GenerateTfService:GenerateTfService,public router: Router) { }
  onRegister(){
    console.log(this.register.value.region)
    const tf = {
      region:this.register.value.region,
      projectName:this.register.value.projectName,
      vpcCidr:this.register.value.vpcCidr,
      ebsSize:this.register.value.ebsSize,
      instanceType:this.register.value.instanceType,
      maxSize:this.register.value.maxSize,
      minSize:this.register.value.minSize,
      desiredCapacity:this.register.value.desiredCapacity,

    }
    this._GenerateTfService.edittfFile(tf).subscribe(data=>{ console.log(data)})
    this.router.navigate(['/designs']);
  }
  ngOnInit(): void {
  }

}
