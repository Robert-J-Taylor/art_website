import { Component, OnInit,ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private toggleButton: any;
    private sidebarVisible: boolean;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    public location: Location, 
    private element : ElementRef) {
      this.sidebarVisible = false;
    }


  ngOnInit(
    
   ) {        const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    setTimeout(function(){
        toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
};
sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
};
sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
        this.sidebarOpen();
    } else {
        this.sidebarClose();
    }
};
isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

    if( titlee === '/home' ) {
        return true;
    }
    else {
        return false;
    }
}
isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if( titlee === '/documentation' ) {
        return true;
    }
    else {
        return false;
    }
}
onLogoutClick(){
this.authService.logout();
this.flashMessage.show('You are logged out', {
  cssClass: 'alert-success',
  timeout: 3000
});
this.router.navigate(['/login']);
return false
};



}
