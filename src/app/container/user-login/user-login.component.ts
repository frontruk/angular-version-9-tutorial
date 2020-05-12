import { Component, OnInit } from '@angular/core';
import { UserLoginForm, UserDetailsModel } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public user;
  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }
  loginUser(userDetails: UserLoginForm){
     console.log( 'call api to submit the details', userDetails)
     this.authService.signInUser(userDetails).subscribe(
       data => {
         localStorage.setItem('user', JSON.stringify(data))
        this.router.navigate(['dashboard'])
       },
       err => {
         console.log('error', err)
       }
     )
  }
}
