import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable()
export class AuthenticationService {

  constructor() { }
  
  users: User[] = [
    { id: 1, email: 'john@example.com', password: 'john123', name: 'John', phone: 9812, address: 'a' },
    { id: 2, email: 'jane@example.com', password: 'jane123' }
  ];
  
  login(email, password) {
    var userExists = this.users.find(user => user.email === email);
    if(userExists && userExists.password === password) {
      localStorage.setItem("user", JSON.stringify(userExists));
      return true;
    }
    return false;
  }
  
  createUser(user) {
    user.id = this.users[this.users.length - 1].id + 1;
    this.users.push(user);
  }
}
