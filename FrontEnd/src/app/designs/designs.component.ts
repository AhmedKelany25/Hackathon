import { Component, OnInit } from '@angular/core';
import {GenerateTfService} from '../generate-tf.service'

interface Infa {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {


  Infastructure: Infa[] = [
    {value: 'Infastructure01', viewValue: 'Infastructure01'},
    {value: 'Infastructure02', viewValue: 'Infastructure02'},
    {value: 'Infastructure03', viewValue: 'Infastructure03'},
  ];

  selectedInfastructure = this.Infastructure[2].viewValue;

  GenerateTfFile(){
    this._GenerateTfService.getinfastructure()
    .subscribe(data=>{
      console.log(data)
    })
  }
  DownloadTfFile(){
    this._GenerateTfService.downloadTf()
    .subscribe(data=>{
      let fileName = "terraform.tf"
      let blob:Blob=data.body as Blob;
      let a = document.createElement('a')
      a.download = fileName;
      a.href = window.URL.createObjectURL(blob);
      a.click();
      console.log(data)
    })
  }
  DeployTfFile(){
    this._GenerateTfService.deployTf()
    .subscribe(data=>{
      console.log(data)
    })
  }
  constructor(public _GenerateTfService:GenerateTfService) { }

  ngOnInit(): void {
  }

}
