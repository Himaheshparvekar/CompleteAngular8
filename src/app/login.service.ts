import { Injectable } from '@angular/core';
import { build$ } from 'protractor/built/element';
import { HttpClient } from '@angular/common/http';
import { LoginViewModel } from './login-view-model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService
{
  constructor(private httpClient : HttpClient)
  {
  }

  currentUserName: string  = null;

  public Login(loginViewModel: LoginViewModel): 
  Observable<any>
  {
    return this.httpClient.post<any>("/authenticate", loginViewModel, { responseType: "json" })
    .pipe(map(user => {
      if (user)
      {
        this.currentUserName = user.userName;
      }
      return user;
    }));
  }

  public Logout()
  {
    this.currentUserName = null;
  }
}
