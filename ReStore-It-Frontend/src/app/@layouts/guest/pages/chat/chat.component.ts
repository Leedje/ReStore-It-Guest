import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageDTO } from '../../../../dtos/messageDTO';
import { FormsModule } from '@angular/forms';
import { webSocketUrl } from '../../../../app.config';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent {

  private socket: WebSocket
  public message = new MessageDTO();

  currentUser: any

  public messages: MessageDTO[] = []

  constructor() {
    this.socket = new WebSocket(webSocketUrl);

    this.socket.onmessage =  (event) => {
      const message: MessageDTO = JSON.parse(event.data);
      this.messages.push(message);
    };
  }

  sendMessage(): void{
    this.message = {
      sender: this.message.sender,
      content: this.message.content
    };

    this.socket.send(JSON.stringify(this.message));
    this.message.content = '';
  }
}

function displayMessage(message: MessageDTO): void{
    let messageElement = document.createElement('div');
    messageElement.textContent = `${message.sender}: ${message.content}`;
  }
