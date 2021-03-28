import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  flag:boolean = false;
  b1:string = "Show Quiz";
  ngOnInit(): void {

  }
  
  change(){
    this.flag = !this.flag;
    if (this.flag) {this.b1 = "Close Quiz";}
    else {this.b1 = "Show Quiz";}
  }
}

