import {Component, OnInit} from '@angular/core';
import {Product} from "../core/model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  title:string ="welcome 4se "
  listProduct!:Product[]
  test:boolean=true
  priceMax!:number;
  constructor() {
  }
  ngOnInit():void {
    this.listProduct=[
      {id: 1, title: "T-shirt1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt3", price: 16, quantity: 8, like: 0}, ]
  }
   decremente(i:number){

      this.listProduct[i].quantity--;
  }
  incremente(i:number){
    this.listProduct[i].like++;
  }
}
