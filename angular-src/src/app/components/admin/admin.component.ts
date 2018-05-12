import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
import{ProductService} from '../../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  tagItems = ['Minimal', 'Light', 'New', 'Friends'];
    categories = ['Food', 'Drink'];
    product={};
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    body.classList.add('loading');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
    ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('settings');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      navbar.classList.remove('bg-danger');
  }
  saveProduct() {
    this.productService.saveProduct(this.product).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/product-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
}
