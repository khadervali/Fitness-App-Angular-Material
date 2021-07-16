import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Router } from'@angular/router';

@Injectable()
export class AuthService {
  authChanged = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) {}

  registerUser(userData: AuthData) {
    this.user = {
      email: userData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.getLoginSuccess();
  }

  loginUser(userData: AuthData) {
    this.user = {
      email: userData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.getLoginSuccess();
  }

  logout() {
    this.user = null;
    this.authChanged.next(false);
    this.router.navigate(['login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user !=null;
  }

  getLoginSuccess() {
    this.authChanged.next(true);
    this.router.navigate(['training']);
  }
}
