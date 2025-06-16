import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDTO } from '../../dtos/orderDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  SubmitOrder(order: OrderDTO): Observable<HttpResponse<any>>{
    return this.http.post<HttpResponse<any>>("/orders/submit", order, {observe: 'response'});
  }

  GetOrderByID(orderId: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`/orders/${orderId}`, { observe: 'response' });
  }

}
