import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  username:string = '';
  @ViewChild('name') inputName:any;
  @ViewChild('number') inputNumber:any;
  constructor() { }

  ngOnInit(): void {
    this.retrieveFromSession();
  }

  retrieveFromSession(){
    let stringified:any = sessionStorage.getItem("userInfo");
    let info = JSON.parse(stringified);
    this.username = info[0].username;
  }

  insertNewContact(name:any,number:any) {
    let table:any = document.getElementById("contactList");
    let body = table.getElementsByTagName("tbody")[0]; //[0] means the first tbody tag
    let newRow = body.insertRow(body.length);   //row created
    
    let cell1 = newRow.insertCell(0);           //cell created
    cell1.innerHTML=name;                  //value places

    let cell2 = newRow.insertCell(1);           //cell created
    cell2.innerHTML=number;                  //value places
    this.reset();
  }
  reset(){
    this.inputName.nativeElement.value = "";
    this.inputNumber.nativeElement.value = "";

  }
}
