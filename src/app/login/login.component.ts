import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userServiceObj = inject(UserService);
  fb:FormBuilder=inject(FormBuilder);
  routerObj = inject(Router);
  validation='';


  user=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    password:['',[Validators.required,Validators.minLength(6)]],
    role:['',Validators.required]    
  })
  get username(){
    return this.user.get('username')
  }
  get password(){
    return this.user.get('password')
  }
  
  userLogin(){
    console.log(this.user.value);
    this.userServiceObj.userLogin(this.user.value,this.user.value.role).subscribe({
      next:(res)=>{
        console.log(res)
        if(res.length===0){
          // alert("Invalid username")
          this.validation='invalidUser'
        } else{
          if(res[0].password===this.user.value.password){
            console.log("Res.role : ",this.user.value.role)
            this.routerObj.navigate([this.user.value.role])
            this.userServiceObj.setLoginStatus(true);
            this.userServiceObj.logedUser.set(this.user.value.username)
            this.userServiceObj.setSelectionStatus(false);
          }else{
            // alert("Invalid passsword")
            this.validation='invalidPassword'
          }
        }
      },
      error:(err)=>{
        console.log("Error while login ",err);
      }
    })
  }

  //new user
  createAccount(){
    this.routerObj.navigate(['signup'])
  }
}
