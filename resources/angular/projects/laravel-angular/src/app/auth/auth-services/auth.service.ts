import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user;

  logedIn = new BehaviorSubject<boolean>(false);
  redirectUrl: string;
  constructor(private router: Router) {
  }

  isLogedIn() {
    return this.logedIn.getValue();
  }

  public setRedirectUrl(url?: string) {
    if (!!url) {
      this.redirectUrl = url;
    } else {
      this.redirectUrl = undefined;
    }
  }
  public checkUser(url: string): boolean {
      if (this.isLogedIn()) {
      return true;
      }
      this.setRedirectUrl(url);
      this.router.navigateByUrl('/login');
      return false;
  }
  public checkNotUser(url: string): boolean {
      if (this.isLogedIn()) {
      this.setRedirectUrl();
      this.router.navigateByUrl('/');
      return false;
      }
      return true;
  }
  public intended(url: string) {
    if (!!this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
      return;
    }
    this.router.navigate([url]);
  }

  public login() {
    this.logedIn.next(true);
    this.intended('/');
  }

  public logout() {
    this.logedIn.next(false);
  }
}
