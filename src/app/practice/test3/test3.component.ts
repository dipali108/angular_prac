import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  inComimgData: any=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
getApiData(){
 this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{this.inComimgData=res});
}

}
