import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import{ProductService} from '../../services/product.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router,private route: ActivatedRoute) { }

  product={};
  ngOnInit() {
    this.getProductDetail(this.route.snapshot.params['id']); 

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
  getProductDetail(id){
    this.productService.showProduct(id).then((res) =>{
      this.product = res;
      console.log(this.product);
    }, (err) =>{
      console.log(err);
    })
  }
  updateProduct(id) { 
    this.productService.editProduct(id, this.product).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/product-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
  
  removeProduct(id){
    this.productService.deleteProduct(id).then((result)=>{
   console.log("Product with id " + id + " removed!")
   this.router.navigate(['/gallery']);
    },(err)=>{
        console.log(err);
       
    })
}
}
