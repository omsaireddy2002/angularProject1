import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-importer-details',
  templateUrl: './importer-details.component.html',
  styleUrl: './importer-details.component.css'
})
export class ImporterDetailsComponent {

  userServiceObj = inject(UserService);
  routerObj = inject(Router);
  fb:FormBuilder = inject(FormBuilder);

  importerDetails = this.fb.group({
      companyName :['',Validators.required],
      typeOfBuss : ['',Validators.required],
      name : ['',Validators.required],
      emailId : ['',Validators.required],
      phone : ['',Validators.required],
      quoteStatus:['Pending'],
      address :this.fb.group({
        city:['',Validators.required],
        country : ['',Validators.required],
        pinCode :['',Validators.required],
      })
  })

  onDetailsFormSubmit(){
    console.log(this.importerDetails.value);
    this.userServiceObj.createImporter(this.importerDetails.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.userServiceObj.pushData(res);
        this.userServiceObj.quoteStatus.set(this.importerDetails.value.quoteStatus);
        this.routerObj.navigate(['generate-quote']);
      },
      error:(err)=>{
        console.log("Error in storing importer details ",err);
      }
    })
  }

}
