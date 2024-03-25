import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineryService {

  httpObj=inject(HttpClient);

  machinId = signal(0)
  machinQty = signal(0)

  //setMachinId;
  setMachinId(id){
    this.machinId.set(id)
  }
  //setMachin quantity;
  setMachinQty(qty){
    this.machinQty.set(qty)
  }

  //to add data
  addData(newData):Observable<any>{
    return this.httpObj.post(`http://localhost:3000/machinery`,newData)
  }

  //To get the machinery
  getMachinery():Observable<any>{
    return this.httpObj.get(`http://localhost:3000/machinery`)
  }

  //get machinery by id
  getMachineryById(id):Observable<any>{
    return this.httpObj.get(`http://localhost:3000/machinery/${id}`)
  }

  //to delete data from api
  deleteData(id):Observable<any>{
    return this.httpObj.delete(`http://localhost:3000/machinery/${id}`);
  }

  //to update the existing data
  updateMachinery(data,id):Observable<any>{
    return this.httpObj.put(`http://localhost:3000/machinery/${id}`,data)
  }
}
