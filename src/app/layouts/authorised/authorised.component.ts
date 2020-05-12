import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-authorised',
  templateUrl: './authorised.component.html',
  styleUrls: ['./authorised.component.scss']
})
export class AuthorisedComponent implements OnInit {
  public user: User;
  public headerMenuList: Array<{text: string}> = [
    {
      text: 'Dashboard'
    },
    {
      text: 'User'
    }
  ]
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

}
