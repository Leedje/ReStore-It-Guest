import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDTO } from '../../dtos/orderDTO';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  GetCustomerChatsByEmailAndOrder(email: string, order: OrderDTO): Observable<HttpResponse<any>>{
    return this.http.post<HttpResponse<any>>('/chat/customer-chats', {email, order} , {observe: 'response'});
  }

  GetChatHistory(chatRoomId: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`/chat/history/${chatRoomId}`, { observe: 'response' });
  }
}
