import { Component, effect, inject } from '@angular/core';
import { UserService } from '../user.service';
import { Machinary } from '../models/machinery';
import { Router } from '@angular/router';
import { MachineryService } from '../machinery.service';

@Component({
  selector: 'app-importer',
  templateUrl: './importer.component.html',
  styleUrl: './importer.component.css'
})
export class ImporterComponent {
  userServiceObj = inject(UserService);
  machinServiceObj = inject(MachineryService)
  routerObj = inject(Router);
  machinary:Machinary[]=[]
  selectedId:number;
  userName:string='';
  
  constructor(){
    effect(()=>{
      this.userName=this.userServiceObj.logedUser();
    })
    this.machinServiceObj.getMachinery().subscribe({
      next:(res)=>{
        console.log(res)
        for(let i=0;i<res.length;i++){
          this.machinary.push(res[i])
        }
        console.log("Machinery : ",this.machinary)
      },
      error:(err)=>{
        console.log("Error in getting machinery details ",err);
      }
    })
  }

  onClickMachine(id){
    console.log("id=",id);
    if(this.userName===''){
      this.routerObj.navigate(['login'])
    }
    else{
      this.routerObj.navigate([`machinery/${id}`]);
    }
  }


}
