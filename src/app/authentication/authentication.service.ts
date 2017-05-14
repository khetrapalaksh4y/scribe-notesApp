import { Injectable } from '@angular/core';
import { User } from '../user/user';

var users = [
  new User('admin@admin.com','adm9', "Adam", 9812, "a"),
  new User('user1@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {

  constructor() { }
  
  login(email, password) {
    var userExists = users.find(user => user.email === email);
    if(userExists && userExists.password === password) {
      localStorage.setItem("user", JSON.stringify(userExists));
      return true;
    }
    return false;
  }
  
  logout() {
    localStorage.removeItem("user");
  }
  
  checkIfLoggedIn() {
    return localStorage.getItem("user") !== null;
  }
}
