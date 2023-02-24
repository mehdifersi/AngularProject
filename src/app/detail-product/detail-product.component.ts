import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../service/product.service";
import {Product} from "../core/model/product";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{
  id!:number;
  p!:Product
  constructor(private route:ActivatedRoute,private ps:ProductService) {

  }
  ngOnInit(): void {
     this.id=+this.route.snapshot.params['id'];
    this.p=this.ps.listProduct[this.id-1]
  }

}
