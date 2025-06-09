import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../../../../services/chatService/chat.service';
import { OrderDTO } from '../../../../dtos/orderDTO';
import { OrderService } from '../../../../services/orderService/order.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css'
})
export class ChatListComponent implements OnInit{

  chats: any[] = [];

  orderId: string = '';
  order: OrderDTO = new OrderDTO();

  customerEmail: string = '';

  orderFound: boolean = false;
  emailConfirmed: boolean = false;

  constructor(private router: Router, private chatService: ChatService, private orderService: OrderService){

  }

  ngOnInit(): void {
    // save order id and email to session storage?
  }

  navigateToChatRoom(chatRoomId: string): void {
    this.router.navigate(['/chats', chatRoomId]);
  }

  getOrderById(){
    //order Id is submitted via html first
    this.orderService.GetOrderByID(this.orderId).subscribe( response => {
      if (response.status == 200){
        this.orderFound = true;
        this.order = response.body;
        sessionStorage.setItem("customerName", this.order.firstName)
      }
      else if(response.status == 403){
        // incorrect email -> unauthorized
        alert("Order doesn't exists")
      }
    }, (error) => {
      // 404 page not found
      console.error("An error occured while trying to find order: ", error)
    });
  }

  getChatsByEmailAndOrder() {
    this.chatService.GetCustomerChatsByEmailAndOrder(this.customerEmail, this.order).subscribe(response => {
      if(response.status == 200){
        this.emailConfirmed = true;
        this.chats = response.body;
      }
    }, (error) => {
      console.error("An error occured while retrieving chats: ", error)
    });
  }

}
