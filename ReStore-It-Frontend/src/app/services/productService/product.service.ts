import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDTO} from '../../dtos/productDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  GetAllProducts(): Observable<any>{
    return this.http.get("/products");
  }

  CreateProduct(product: ProductDTO): Observable<any>{
    //return this.http.post();
    return this.http.post(`/products/create`, product);
  }

  DeleteProduct(id: string){
    return this.http.delete(`/products/delete/${id}`)
  }

  async GetProductDetails(id: string){
    return this.http.get(`/products/${id}`)
  }

}
