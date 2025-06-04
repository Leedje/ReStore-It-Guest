import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  imports: [CommonModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css'
})
export class ChatListComponent implements OnInit{

  chatRooms: any[] = [];

  constructor(private router: Router){

  }

  ngOnInit(): void {

  }

  getOrderById(){
    
  }

  getChatByOrderID() {
    // The idea is to allow a guest user to find their order (with a find OrderByID) and
    // open the chat based on that specific order.
  }

  navigateToChat(chatRoomId: string): void{
    this.router.navigate(['/chat', chatRoomId]);
  }

}
