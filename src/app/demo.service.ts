import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http:HttpClient) { }
  squareFunction(x:any,y:any){
    alert(x+y);
  }

  getApi(endpoint:string){
   return this.http.get(environment.api + endpoint);
  }
}
