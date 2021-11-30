import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Iproduct } from "./product";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root' 
})
export class ProductService{
  private productUrl = 'api/products/products.json'

  constructor(private http:HttpClient){}

    getProducts(): Observable <Iproduct[]>{
        return this.http.get<Iproduct[]>(this.productUrl).pipe(
          tap(data => console.log('All', JSON.stringify(data))),
          catchError(this.handleError)

        );
    }
    private handleError(err: HttpErrorResponse) {
      //in a real world app we would send server to some remote logging infastructure
      //instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        //client side or network error
        errorMessage = `an error occurred: ${err.error.message}`;
      } else{
        //backend returned an unsuccessful response code
        //response body may contain clues as to what went wrong
        errorMessage = `server returned code: ${err.status}, error message: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
  
  }
