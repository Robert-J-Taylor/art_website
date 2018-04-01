import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name: String;
username: String;
email: String;
password: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router) { }

    ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('full-screen');
      body.classList.add('register');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('full-screen');
      body.classList.remove('register');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
  }

onRegisterSubmit(){
  const user ={
    name: this.name,
    email: this.email,
    username: this.username,
    password: this.password
  }

  //Required Fields
  if(!this.validateService.validateRegister(user)){
    this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }
  //ValidateEmail
  if(!this.validateService.validateEmail(user.email)){
    this.flashMessage.show('Please user a valid email', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }
  //Register User
  this.authService.registerUser(user).subscribe(data=> {
    if(data.success){ 
      this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/login'])
    }else{
      this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/register'])

    }
  });
}
}
