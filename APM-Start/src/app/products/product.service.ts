import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Iproduct } from "./product";
@Injectable({
    providedIn: 'root' 
})
export class ProductService{
  private productUrl = 'api/products/products.json'

  constructor(private http:HttpClient){}

    getProducts(): Observable <Iproduct[]>{
        return this.http.get<Iproduct[]>(this.productUrl);
        

    }
  }
