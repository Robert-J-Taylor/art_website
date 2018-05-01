import { Component, Renderer,OnInit } from '@angular/core';
import{ProductService} from '../../services/product.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product = {}
  constructor(private route: ActivatedRoute, private router: Router, private productService:ProductService, private renderer : Renderer) { }

  ngOnInit(){

    this.getProductDetail(this.route.snapshot.params['id']); 


    var body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    body.classList.add('loading');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');


  }
  addToCart(){
    this.productService.addToCart(this.product);
    alert("Successfully added");
  }
getProductDetail(id){
  this.productService.showProduct(id).then((res) =>{
    this.product = res;
    console.log(this.product);
  }, (err) =>{
    console.log(err);
  })
}

ngOnDestroy(){
  var body = document.getElementsByTagName('body')[0];
  body.classList.remove('settings');
  var navbar = document.getElementsByTagName('nav')[0];
  navbar.classList.remove('navbar-transparent');
  navbar.classList.remove('bg-danger');
} 
}
