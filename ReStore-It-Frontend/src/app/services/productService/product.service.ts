import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDTO} from '../../dtos/productDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  //Guest Mapping
  GetAllProducts(): Observable<any>{
    return this.http.get<HttpResponse<any>>(`/products`);
  }

 GetProductByID(id: String){
   return this.http.get(`/products/${id}`);
  }

  //Business Mapping

  GetProductsByUserID(userId: String){
    this.http.get<HttpResponse<any>>(`/products/business/${userId}`);
  }

  GetProductByUserID(userId: String){
    this.http.get<HttpResponse<any>>(`/products/business/`);
  }

  CreateProduct(product: ProductDTO): Observable<HttpResponse<any>>{
    return this.http.post<HttpResponse<any>>(`/products/business/create`, product);
  }

  DeleteProduct(id: String): Observable<HttpResponse<any>>{
    return this.http.delete<HttpResponse<any>>(`/products/business/delete/${id}`);
  }

  EditProduct(product: ProductDTO): Observable<HttpResponse<any>>{
    return this.http.post<HttpResponse<any>>(`/products/business/edit`, product);
  }

}
