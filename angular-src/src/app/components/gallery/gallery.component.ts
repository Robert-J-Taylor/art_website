import { Component, Renderer,OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  doubleSlider = [1000, 5000];
  constructor( private renderer : Renderer, config: NgbAccordionConfig) { 

  config.closeOthers = true;
        config.type = 'info';}
  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    body.classList.add('loading');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          "previewFullscreen": true,
          "previewKeyboardNavigation": true,
          "previewCloseOnClick": true,
          "previewCloseOnEsc": true,
          "previewZoom": true,
          "imageSwipe": true,
          "thumbnailsSwipe": true,
          "previewSwipe": true,
          "imageArrowsAutoHide": true,
          "thumbnailsArrowsAutoHide": true,
          "imageAnimation": "slide"
      },
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];
  
  
  this.galleryImages = [
    {
        small: './assets/img/gallery/outfit-gucci.jpg',
        medium: './assets/img/gallery/outfit-gucci.jpg',
        big: './assets/img/gallery/outfit-gucci.jpg'
    },
    {
        small: './assets/img/gallery/outfit-paul-smith.jpg',
        medium: './assets/img/gallery/outfit-paul-smith.jpg',
        big: './assets/img/gallery/outfit-paul-smith.jpg'
    },
    {
        small: './assets/img/gallery/outfit-maison-margiela.jpg',
        medium: './assets/img/gallery/outfit-maison-margiela.jpg',
        big: './assets/img/gallery/outfit-maison-margiela.jpg'
    },
    {
        small: './assets/img/gallery/outfit-burberry.jpg',
        medium: './assets/img/gallery/outfit-burberry.jpg',
        big: './assets/img/gallery/outfit-burberry.jpg'
    },
    {
        small: './assets/img/gallery/ressence.jpg',
        medium: './assets/img/gallery/ressence.jpg',
        big: './assets/img/gallery/ressence.jpg'
    },
    {
        small: './assets/img/gallery/gucci-sun.jpg',
        medium: './assets/img/gallery/gucci-sun.jpg',
        big: './assets/img/gallery/gucci-sun.jpg'
    },
    {
        small: './assets/img/gallery/bottega.jpg',
        medium: './assets/img/gallery/bottega.jpg',
        big: './assets/img/gallery/bottega.jpg'
    },
    {
        small: './assets/img/gallery/bracelet.jpg',
        medium: './assets/img/gallery/bracelet.jpg',
        big: './assets/img/gallery/bracelet.jpg'
    }
  ];
  }
  
  
  
  
    ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('settings');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      navbar.classList.remove('bg-danger');
  } }
  