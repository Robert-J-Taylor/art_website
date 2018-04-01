import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:Object;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('settings');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    navbar.classList.add('bg-danger'); 
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
  err =>{
    console.log(err);
    return false;
  });

  }
 
ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('settings');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    navbar.classList.remove('bg-danger');
}

}
