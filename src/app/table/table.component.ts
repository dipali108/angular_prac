import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private dService:DemoService, private http:HttpClient) { }

  ngOnInit(): void {
  }
  records:any;
  records1: any;
 getRecord(){
   this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments").subscribe((data)=>{
     this.records = data;
     //console.log(this.records);
   })

 }
 deleteRecord(record:any){
   let i= this.records.indexOf(record);
   this.records.splice(i,1);

 }
 getRecord1(){
  this.dService.getApi("/users").subscribe((data1)=>{
    this.records1 = data1;
  })
   
 }
}
