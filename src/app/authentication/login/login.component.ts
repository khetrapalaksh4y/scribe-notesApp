import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }
   
  ngOnInit() {
    if(localStorage.getItem("user") !== null)
    {
      this.router.navigate(['notes']);
    }
  }
  
  login(email, password) {
    if(this.authenticationService.login(email, password))
    {
      this.router.navigate(['notes']);
    }
    else
    {
      this.errorMessage = "Failed to login. Please make sure user exists and the password entered is valid.";
      setTimeout(() => {
        this.errorMessage = "";
      }, 2500);
    }
  }
}
