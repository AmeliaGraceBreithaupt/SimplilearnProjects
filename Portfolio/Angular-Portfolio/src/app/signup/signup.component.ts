import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  userObj:Array<User> = new Array();
  userString:string = "";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  storeInSession() {
    sessionStorage.setItem("userInfo",this.userString);
}
  saveInfo(info:any){
    let fname = info.fname;
    let lname = info.lname;
    let uname = info.uname;
    let pwd = info.pwd;
    let data = new User(fname,lname,uname,pwd);
    this.userObj.push(data);
    this.userString = JSON.stringify(this.userObj);
    this.storeInSession();
    this.router.navigate(["login"]);
  }
}
class User {
  constructor(public fname:string, public lname:string,
              public username:string, public pwd:string) {  }
}