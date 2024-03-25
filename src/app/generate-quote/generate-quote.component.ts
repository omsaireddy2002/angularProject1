import { Component,inject } from '@angular/core';
import { MachineryService } from '../machinery.service';
import { UserService } from '../user.service';
import { Machinary } from '../models/machinery';
import { Importer } from '../models/user';

@Component({
  selector: 'app-generate-quote',
  templateUrl: './generate-quote.component.html',
  styleUrl: './generate-quote.component.css'
})
export class GenerateQuoteComponent {

  machObj = inject(MachineryService);
  userObj = inject(UserService);
  data;
  id:number;
  quantity:number;
  rate:number;
  insurance:number;
  freight:number;
  cif:number;
  customDuty:number;
  customDutyPer=0.298;
  currentImporter:Importer;
  total:number;

  constructor(){
    this.id=this.machObj.machinId();
    this.quantity=this.machObj.machinQty();
    this.machObj.getMachinery().subscribe({
      next:(res)=>{
        this.data=res[this.id];
        this.rate =this.data?.cost*this.quantity;
        this.freight = this.rate*0.1;
        this.insurance = this.rate*0.005;
        this.cif=this.rate+this.insurance+this.freight;
        this.customDuty=this.cif*this.customDutyPer;
        this.currentImporter=this.userObj.currentImporter;
        this.customDuty=this.cif*this.customDutyPer;
      },
      error:(err)=>{
        console.log("Error in genrationg quotation",err)
      }
    })
    
    // this.data=res[this.id];
    this.rate =this.data?.cost*this.quantity;
    this.freight = this.rate*0.1;
    this.insurance = this.rate*0.005;
    this.cif=this.rate+this.insurance+this.freight;
    this.customDuty=this.cif*this.customDutyPer;
    this.currentImporter=this.userObj.currentImporter;
    this.customDuty=this.cif*this.customDutyPer;
  }

}
