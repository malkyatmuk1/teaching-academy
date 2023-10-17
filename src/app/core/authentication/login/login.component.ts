import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { LogInCredentials, UserSuccessfullLogInCredentials } from "./login.model";
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService,
              private storageService: StorageService,
              private router: Router) { }

  isSignUp = false;

  loginModel: LogInCredentials = {
    'userName': '',
    'password': ''
  };

  logIn() {
    const data = Object.assign({}, this.loginModel);
    this.authService.login(data).subscribe(resp => {
      const response = JSON.parse(resp);
      this.logUserIntoTheSystem(response);
    }, () => {
      // this.notifications.Error.emit('WrongUsernameOrPassword');
    });
  }

  logUserIntoTheSystem(userData: UserSuccessfullLogInCredentials) {
    // this.notifications.Success.emit('SuccessfullyLoggedIntoAccount');
    localStorage.setItem('userId', userData.userId);
    this.setToken(userData.token);
    this.setTokenExpirationTime();
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.storageService.Token.emit(token);
  }

  setTokenExpirationTime() {
    // this.authService.getExpirationMinutes().subscribe(resp => {
    //   localStorage.setItem('expireTime', moment(Date.now()).add(resp, 'm').valueOf()
    //     .toString());
    // }, () => {
    //   // this.errorService.processError(error);
    // });
  }

}
