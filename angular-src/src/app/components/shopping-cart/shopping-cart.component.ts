import { Component, OnInit } from '@angular/core';
import{ProductService} from '../../services/product.service'

declare interface Table_With_Checkboxes {
  id?: number;
  check: boolean;
  product_name: string;
  type: string;
  qty?: number;
  price: string;
  amount?: string;
}
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
declare interface TableData2 {
  headerRow: string[];
  dataRows: Table_With_Checkboxes[];
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: any=[];
  public tableData3: TableData;
  total: number =0;
  constructor(private productService: ProductService) { }

  
  ngOnInit() {
    this.shoppingCart = this.productService.getCart();
  	for(var a = 0; a < this.shoppingCart.length; a++) {
  		this.total += this.shoppingCart[a].total;
  	}

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    body.classList.add('loading');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.tableData3 = {
      headerRow: [ '', '', 'Price', 'Quantity', 'Total'],
      dataRows: [
          ['tables/agenda.png', 'Get Shit Done Notebook', 'Most beautiful agenda for the office.', '49', '1','49'],
          ['tables/stylus.jpg', 'Stylus',  'Design is not just what it looks like and feels like. Design is how it works.', '499', '2', '998'],
          ['tables/evernote.png', 'Evernote iPad Stander', 'A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.', '799', '1', '799']
      ]
  };
  }
    ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('settings');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      navbar.classList.remove('bg-danger');
  }


  getTotal2() {
    var total = 0;
    for( var i = 0; i < this.tableData3.dataRows.length; i++ ){
        var integer = parseInt(this.tableData3.dataRows[i][5])
        total += integer;
    }
    return total;
};
showElements() {
    for( var i = 0; i < this.tableData3.dataRows.length; i++ ){
        console.log(this.tableData3.dataRows[i][1])
    }
}
emptyCart() {
  this.productService.emptyCart();
  this.shoppingCart = [];
}
}
