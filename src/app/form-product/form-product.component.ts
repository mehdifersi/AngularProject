import {Component, OnInit} from '@angular/core';
import {Product} from "../core/model/product";
import {ProductService} from "../service/product.service";
import {ConsumeService} from "../service/consume.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit{
  p!:Product
  constructor(private ps:ProductService,private consume:ConsumeService,private route:Router) {
  }


  ngOnInit(): void {
    this.p=new Product()
    this.p.like=0
  }
  get(prod:Product){
    // console.log(p)
    // this.ps.listProduct.push(p)
    // console.log(this.ps.listProduct);
    this.consume.postProduct(this.p).subscribe({
      next: (data)=> this.route.navigateByUrl("/products")
    })

  }
}
