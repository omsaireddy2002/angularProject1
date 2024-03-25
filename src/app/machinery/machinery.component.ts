import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Machinary } from '../models/machinery';
import { FormControl, Validators } from '@angular/forms';
import { MachineryService } from '../machinery.service';

@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrl: './machinery.component.css'
})
export class MachineryComponent {

  activatedRoute = inject(ActivatedRoute);
  userService = inject(UserService);
  machinServiceObj = inject(MachineryService);
  routerService = inject(Router);
  machineryObj = inject(MachineryService);
  selectedMachine:Machinary;
  qty= new FormControl('',Validators.required)

  ngOnInit(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.machinServiceObj.getMachineryById(id).subscribe({
      next:(userList)=>{
        this.selectedMachine = userList;
      },
      error:(error)=>{
        console.log('Error in geting user',error)
      }
    })
  }

  onSelecting(){
    this.routerService.navigate(['importer-details'])
    this.userService.setSelectionStatus(true);
    this.machineryObj.setMachinQty(this.qty.value);
  }

}
