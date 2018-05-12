import{Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from '../../../../models/product';
@Injectable()
export class ProductService{
  shoppingCart: any=[];
  cartView: any=[];
  
    constructor(private http:Http){
    console.log('Task Service initialized...');
    }
    saveProduct(data) {
      return new Promise((resolve, reject) => {
          this.http.post('http://localhost:3000/products/gallery', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
    editProduct(id,data){
      return new Promise((resolve,reject)=>{
        this.http.put('http://localhost:3000/products/gallery/' +id,data)
        .map(res=>res.json())
        .subscribe(res=> {
          resolve(res);
        },(err)=>{
          reject(err);
        })
      })
    }
    deleteProduct(id){
      return new Promise((resolve,reject) =>{
        this.http.delete('http://localhost:3000/products/gallery/' + id)
        .subscribe(res=>{
          resolve(res);
        }, (err)=>{
          reject(err);
        })
      })
    }
    getProducts(){
        return this.http.get('http://localhost:3000/products/gallery')
        .map(res=> res.json());
    }
    getPaintings(){
      return this.http.get('http://localhost:3000/products/paintings')
      .map(res=> res.json());
    }
    getPendants(){
      return this.http.get('http://localhost:3000/products/pendants')
      .map(res=> res.json());
    }
    getMagnets(){
      return this.http.get('http://localhost:3000/products/magnets')
      .map(res=> res.json());
    }

  showProduct(id) {
    return new Promise((resolve, reject) => {
        this.http.get('http://localhost:3000/products/gallery/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  /////////////SHOPPING CART LOGIC///////////////////
  getCart(){
    return this.shoppingCart;
  }
  addToCart(item){
    if(this.shoppingCart.length ==0){
      this.prependItemToCart(item);
    } else {
      let itemExists = this.checkItemExists(item);
      if(itemExists){
        for(var a = 0; a < this.shoppingCart.length; a++) {
  				if(this.shoppingCart[a].title == item.title) {
  					this.shoppingCart[a].quantity += 1;
            this.shoppingCart[a].total += item.price;
  				}
  			}
      }else {
        this.prependItemToCart(item);
      }
    }
  }
checkItemExists(item){
  for(var a = 0; a < this.shoppingCart.length; a++) {
    if(this.shoppingCart[a].title == item.title) {
      return true;
    } else {
      return false;
    }
  }
}


prependItemToCart(item){
  let newItem={
    title: item.title,
    quantity: 1,
    total: item.price,
    description: item.description,
    imagePath: item.imagePath,
    price: item.price
  }
  this.shoppingCart.unshift(newItem);
}

removeItemFromCart(item){
  for(var index = 0; index < this.shoppingCart.length;index++){
    let cartItem = this.shoppingCart[index];
    if(cartItem.title == item.title){
      cartItem.quantity -= 1;
      cartItem.total -= item.price;
    } else {
      this.shoppingCart.splice(index,1);
    }
  }
}
emptyCart(){
  this.shoppingCart = [];
}
}
