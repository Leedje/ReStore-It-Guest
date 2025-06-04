import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-placed',
  imports: [CommonModule],
  templateUrl: './order-placed.component.html',
  styleUrl: './order-placed.component.css'
})
export class OrderPlacedComponent {

  orderId: string = ''
  displayMessage: boolean = false

  constructor(private router: Router){
    this.orderId = sessionStorage.getItem('orderId') || 'N/A';
  }

  navigateToHome(): void{
    this.router.navigate(['']);
  }

  copyToClipboard(){
    navigator.clipboard.writeText(this.orderId).then(() => {
      this.displayMessage = true;
    }).catch(err => {
      console.error("Failed to copy", err);
    });

  }

}
