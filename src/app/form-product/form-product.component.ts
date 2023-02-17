import {Component, OnInit} from '@angular/core';
import {Product} from "../core/model/product";
import {ProductServiceTsService} from "../service/product-service.ts.service";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit{
  p!:Product
  constructor(private ps:ProductServiceTsService) {
  }


  ngOnInit(): void {
    this.p=new Product()
  }
  get(p:Product){
    console.log(p)
    this.ps.listProduct.push(p)
    console.log(this.ps.listProduct);
  }
}
