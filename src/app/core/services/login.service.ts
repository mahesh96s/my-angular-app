import { Injectable } from '@angular/core';
import { UserSignInRequest } from '../../shared/models/user-signin-request';
import { UserSignInResponse } from '../../shared/models/user-signin-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private userData:UserSignInResponse = {
        firstName: "abc",
        lastName: "abc",
        email: "",
        lastLogin: new Date,
        confirmedAt: new Date
    }
    login(data: UserSignInRequest): UserSignInResponse {
        this.userData.email = data.email;
        return this.userData;
    }
}