import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message:string;
  email:string = "";
  password:string = "";
  constructor() { }

  ngOnInit() {

  }
  onUserlogin() {
    if (this.email && this.password !== "") {
      this.message = "user has successfully logged in";
    } else {
      this.message = "Invalid credentials";
    }

  }
}
