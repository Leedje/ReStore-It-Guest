import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDTO} from '../../dtos/productDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  GetAllProducts(): Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(`/products`, {observe: 'response'});
  }

 GetProductByID(id: String): Observable<HttpResponse<any>>{
   return this.http.get<HttpResponse<any>>(`/products/${id}`, {observe: 'response'});
  }

}
