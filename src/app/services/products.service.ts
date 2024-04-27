import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private BaseUrl:string="http://localhost:3000/products"

  constructor(
    private _http:HttpClient
  ) { };

  GetAllProducts(): Observable<any[]> {
    return this._http.get<any[]>(this.BaseUrl);
  }
  
}
