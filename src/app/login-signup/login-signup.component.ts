import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    name: '',
    username: '',
    password: ''
  };

  loginObj: any = {
    username: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignup() {
    const userExists = this.signupUsers.some(user => user.username === this.signupObj.username);
    console.log(this.signupUsers);
    if (userExists) {
      alert('User already exists with the given username. Please choose a different one.');
    } else {
      // this.signupUsers.push(this.signupObj);
      this.signupUsers.push({...this.signupObj});
      localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
      this.signupObj = {
        name: '',
        username: '',
        password: ''
      };
      alert('Signup successful!');
    }
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.username === this.loginObj.username && m.password === this.loginObj.password);
    if (isUserExist) {
      this.router.navigateByUrl('/blist');
    } else {
      alert('Invalid credentials or user does not exist.');
      this.loginObj={
        username: '',
        password: ''
      }
    }
  }
}
