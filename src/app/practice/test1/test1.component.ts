import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  name: string = "dipali";
  word: string = "YOUTUBE";
  dateExample = Date.now();
  jsonExample: any = { username: "Dipali", city: "metuchen", state: "NJ", ID: 1 };
  currencyExample = 111;

  constructor() { }

  ngOnInit(): void {
  }

}
