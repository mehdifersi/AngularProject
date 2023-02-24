import {Injectable, OnInit} from '@angular/core';
import {Product} from "../core/model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  listProduct!:Product[]

  constructor() {
    this.listProduct=[
      {id: 1, title: "T-shirt1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt3", price: 16, quantity: 8, like: 0}, ]
  }

  ngOnInit(): void {
    console.log(this.listProduct)
  }




  }
