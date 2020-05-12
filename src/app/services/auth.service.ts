import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserLoginForm, UserDetailsModel, User } from '../interfaces/user';
import { of, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  reMapUserDetails(userObj: UserDetailsModel): User {
    return { 
      username: userObj.id,
      name: userObj.fullname,
      role: userObj.roletype,
      token:   userObj.roletype,
      age:  userObj.age
    }
  }
  signInUser(userDetails: UserLoginForm ): Observable<User>{
    const url : string = `${environment.domain}/${environment.stage}/${environment.user}`
    return this.http.post(url, userDetails).pipe(
      map( (data:UserDetailsModel ) => {
        return this.reMapUserDetails(data);
      }
      )
    )
  }
}

