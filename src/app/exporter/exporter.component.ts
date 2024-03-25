import { Component, OnInit, effect, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { MachineryService } from '../machinery.service';
import { Machinary } from '../models/machinery';

@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.component.html',
  styleUrl: './exporter.component.css'
})
export class ExporterComponent {
  
  fb:FormBuilder=inject(FormBuilder);
  userServiceObj = inject(UserService);
  machineObj = inject(MachineryService);
  machineryData = [];
  machineryValues:Machinary = new Machinary();
  showAdd:boolean=false;
  showUpdate:boolean=false;
  importersData = [];
  
  mechineryDetails = this.fb.group({
    title:[''],
    image:[''],
    discription:[''],
    cost:[''],
    madein:[''],
    manufacturer:[''],
  });
  
  constructor(){
    this.getData();
    
    this.importersData=this.userServiceObj.requests;
  }

  //to send the quoate
  sendQuote(i){
    this.importersData[i].quoteStatus='Accepted';
  }

  //To get stored data from the server
  getData(){
    this.machineObj.getMachinery().subscribe({
      next:(res)=>{
        console.log("Data from api is ",res);
        for(let i=0;i<res.length;i++){
          this.machineryData.push(res[i]);
        }
      },
      error:(err)=>{
        console.log("Error while getting data from api ",err);
      }
    })
  }

  //to add new data
  clickAdd(){
    this.mechineryDetails.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  //To give or edit data 
  onSubmitData(){
    this.machineryValues.title = this.mechineryDetails.value.title;
    this.machineryValues.image = this.mechineryDetails.value.image;
    this.machineryValues.discription = this.mechineryDetails.value.discription;
    this.machineryValues.cost = Number(this.mechineryDetails.value.cost);
    this.machineryValues.madein = this.mechineryDetails.value.madein;
    this.machineryValues.manufacturer = this.mechineryDetails.value.manufacturer;
    this.machineObj.addData(this.mechineryDetails.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.getData()
      },
      error:(err)=>{
        console.log("Error in adding new Machinery dara ",err)
      }
    })
  }

  //To delete the data 
  onDelete(data){
    console.log("Deleted the data with id ",data.id);
    this.machineObj.deleteData(data.id).subscribe({
      next:(res)=>{
        console.log("After deletion ",res)
        this.getData();
      }
    })
  }

  //to edit the existing data
  editMachineryData(data : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.machineryValues.id = data.id;
    this.mechineryDetails.controls['title'].setValue(data.title);
    this.mechineryDetails.controls['image'].setValue(data.image);
    this.mechineryDetails.controls['discription'].setValue(data.discription);
    this.mechineryDetails.controls['cost'].setValue(data.cost);
    this.mechineryDetails.controls['madein'].setValue(data.madein);
    this.mechineryDetails.controls['manufacturer'].setValue(data.manufacturer);
  }

  //to update the machineryDetails
  updateMachinery(){
    this.machineryValues.title = this.mechineryDetails.value.title;
    this.machineryValues.image = this.mechineryDetails.value.image;
    this.machineryValues.discription = this.mechineryDetails.value.discription;
    this.machineryValues.cost = Number(this.mechineryDetails.value.cost);
    this.machineryValues.madein = this.mechineryDetails.value.madein;
    this.machineryValues.manufacturer = this.mechineryDetails.value.manufacturer;
    this.machineObj.updateMachinery(this.machineryValues,this.machineryValues.id).subscribe({
      next:(res)=>{
        console.log("Updated data is ",res)
        this.getData()
      },
      error:(err)=>{
        console.log("Error in updating data ",err)
      }
    })
  }

}

