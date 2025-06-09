import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageDTO } from '../../../../dtos/messageDTO';
import { FormsModule } from '@angular/forms';
import { webSocketUrl } from '../../../../app.config';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../../../services/chatService/chat.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent implements OnInit, OnDestroy {

  socket!: WebSocket
  public message = new MessageDTO();

  chatRoomId: string = '';

  public messages: MessageDTO[] = []

  constructor(private urlRoute: ActivatedRoute, private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.chatRoomId = this.urlRoute.snapshot.paramMap.get('chatRoomId') || '';
    this.socket = new WebSocket(`${webSocketUrl}/${this.chatRoomId}`);

    console.log("Loaded Chat Component. ChatRoom ID:", this.chatRoomId);

    this.socket.onmessage =  (event) => {
      const message: MessageDTO = JSON.parse(event.data);
      this.messages.push(message);
    };

    this.chatService.GetChatHistory(this.chatRoomId).subscribe((response: HttpResponse<any>) => {
      if (response.status == 200) {
        this.messages = response.body;
      }
      else {
        // show 404 page
        console.error("No chat ID found in route.")
      }
    },
      (error) => {
        console.error(error)
      });
  }

  ngOnDestroy(): void {
    this.socket.close()
  }

  sendMessage(): void{
    this.message = {
      id: '',
      chatRoomId: this.chatRoomId,
      sender: sessionStorage.getItem("customerName") || '',
      receiver: '',
      content: this.message.content,
      timeSent: ''
    };

    this.socket.send(JSON.stringify(this.message));
    this.message.content = '';
  }

  goBack(): void {
    window.history.back();
  }
}
