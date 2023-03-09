import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../core/model/product";

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private http:HttpClient) { }

  getProducts(){
   return  this.http.get<Product[]>("http://localhost:3000/products");
  }

  postProduct(prod:Product){
    return this.http.post<Product>("http://localhost:3000/products",prod)
  }
  updateProduct(id:number,prod:Product){
    return this.http.put<Product>("http://localhost:3000/products"+'/'+ id, prod);

  }
  deleteProduct(id:number){
    return this.http.delete("http://localhost:3000/products/"+ id)
  }

}
