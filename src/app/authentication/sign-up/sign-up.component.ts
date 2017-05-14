import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../user/user';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser = {};
  errorMessage: string;
  constructor(private router: Router,
  private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if(localStorage.getItem("user") !== null)
    {
      this.router.navigate(['notes']);
    }
  }
  
  validateNewUser() {
    if(!this.newUser.hasOwnProperty('email'))
    {
      this.errorMessage = "Email address is required.";
      return false;
    }
    if(!this.newUser.hasOwnProperty('password'))
    {
      this.errorMessage = "Password is required.";
      return false;
    }
    return true;
  }
  
  signUp() {
    if(this.validateNewUser())
    {
      this.authenticationService.createUser(this.newUser);
      this.router.navigate(['login']);
    }
    else
    {
      setTimeout(() => {
        this.errorMessage = "";
      }, 2500);
    }
  }

}
