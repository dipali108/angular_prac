import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(private square:DemoService) { }

  ngOnInit(): void {
  }
  sqFunction(){
    this.square.squareFunction(5,7);
  }
}
