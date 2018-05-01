import { Component, Renderer,OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import {Product} from '../../../Product';
import{ProductService} from '../../services/product.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  products: Product[];
  
  productId: Product[];

  doubleSlider = [1000, 5000];
  constructor( private productService: ProductService, private renderer : Renderer, config: NgbAccordionConfig) { 
    this.productService.getProducts()
    .subscribe(products => {
        console.log(products);
        this.products = products;
    })
    
    

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
          thumbnailsColumns: 5,
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
        small: './assets/img/gallery/blue_painting.jpg',
        medium: './assets/img/gallery/blue_painting.jpg',
        big: './assets/img/gallery/blue_painting.jpg'
    },
    {
        small: './assets/img/gallery/painting.jpg',
        medium: './assets/img/gallery/painting.jpg',
        big: './assets/img/gallery/painting.jpg'
    },
    {
        small: './assets/img/gallery/green_painting.jpg',
        medium: './assets/img/gallery/green_painting.jpg',
        big: './assets/img/gallery/green_painting.jpg'
    },
    {
        small: './assets/img/gallery/earth_painting.jpg',
        medium: './assets/img/gallery/earth_painting.jpg',
        big: './assets/img/gallery/earth_painting.jpg'
    },
    {
        small: './assets/img/gallery/grey_painting.jpg',
        medium: './assets/img/gallery/grey_painting.jpg',
        big: './assets/img/gallery/grey_painting.jpg'
    },
    {
        small: './assets/img/gallery/purple_green_painting.jpg',
        medium: './assets/img/gallery/purple_green_painting.jpg',
        big: './assets/img/gallery/purple_green_painting.jpg'
    },
    {
        small: './assets/img/gallery/purple_painting.jpg',
        medium: './assets/img/gallery/purple_painting.jpg',
        big: './assets/img/gallery/purple_painting.jpg'
    },
    {
        small: './assets/img/gallery/white_painting.jpg',
        medium: './assets/img/gallery/white_painting.jpg',
        big: './assets/img/gallery/white_painting.jpg'
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
  