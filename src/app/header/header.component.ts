import { Component, effect, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userServiceObj=inject(UserService);
  status:boolean;
  userName:string;

  constructor(){
    effect(()=>{this.status=this.userServiceObj.loginStatus()
      this.userName=this.userServiceObj.logedUser()})
  }

  onClick(){
    this.userServiceObj.setLoginStatus(false)
  }
  
}
