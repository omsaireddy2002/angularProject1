import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder,Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  userServiceObj = inject(UserService);
  fb:FormBuilder = inject(FormBuilder);
  routerObj = inject(Router)

  user = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    password:['',[Validators.required,Validators.minLength(6)]],
    email:['',[Validators.required,Validators.email]],
    dob:['',[Validators.required]],
    role:['',[Validators.required]],
  })

  get username(){
    return this.user.get('username');
  }
  get password(){
    return this.user.get('password');
  }
  get email(){
    return this.user.get('email');
  }
  get dob(){
    return this.user.get('dob');
  }
  get role(){
    return this.user.get('role');
  }

  onSubmitUser(){
    let {username,password,email,dob} = this.user.value;
    let newUser = new User(username,password,email,dob);
    let role = this.user.value.role;
    console.log("Role : ",role);
    this.userServiceObj.createUser(newUser,role).subscribe({
      next:(res)=>{
        console.log(res);
        this.routerObj.navigate(['login']);
      },
      error:(error)=>{
        console.log("Error in user Creation",error)
      }
  })
  }

  //to login
  haveAccount(){
    this.routerObj.navigate(['login']);
  }
}
