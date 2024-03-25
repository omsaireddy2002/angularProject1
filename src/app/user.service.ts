import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Importer, User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClientObj = inject(HttpClient)
  logedUser = signal('');
  loginStatus=signal(false);
  importerSelectionStatus=signal(false);
  quoteStatus = signal("Pending");
  requests =[];
  currentImporter:Importer;

  //To store importer details
  createUser(newUser:User,role:string):Observable<any>{
    return this.httpClientObj.post(`http://localhost:3000/${role}`,newUser)
  }

  //Importer login
  userLogin(userDetails,role:string):Observable<any>{
    console.log("User loged in")
    return this.httpClientObj.get(`http://localhost:3000/${role}?username=${userDetails.username}`)
  }

  //To get the importer details
  getUser(username:string,role:string):Observable<any>{
    return this.httpClientObj.get(`http://localhost:3000/${role}?username=${username}`)
  }

  //set loginstatus
  setLoginStatus(value:boolean){
    this.loginStatus.set(value);
  }

  //To set importerSelecting Status
  setSelectionStatus(status:boolean){
    this.importerSelectionStatus.set(status)
  }

   //To store importer details
   createImporter(newImporter):Observable<any>{
    return this.httpClientObj.post(`http://localhost:3000/importerDetails`,newImporter)
  }

  //to collect importers details
  pushData(data){
    this.currentImporter=data;
    this.requests.push(data);
  }

  
}
