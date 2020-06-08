import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../core/services/login.service';
import { UserSignInRequest } from '../../../../shared/models/user-signin-request';
import { UserSignInResponse } from '../../../../shared/models/user-signin-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message:string;
  email:string = "";
  password:string = "";
  user:UserSignInResponse;
  isInvalid:boolean = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }
  onUserlogin() {
    if (this.email && this.password !== "") {
      const data:UserSignInRequest = {
        email: this.email,
        password: this.password
      }
      this.user = this.loginService.login(data);
      if (this.user) {
        this.router.navigate(['dashboard'])
      }
    } else {
      this.message = "Invalid credentials";
      this.isInvalid = true;
    }

  }
}
