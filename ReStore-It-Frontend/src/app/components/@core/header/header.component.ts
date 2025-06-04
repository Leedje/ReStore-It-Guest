import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cartService/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router, private cartService: CartService) { }

  navigateToBusiness(): void {
    window.location.href = "http://localhost:4300/business/login";
  }

  viewOrder() {
    this.router.navigate(['/order']);
  }

  displayCartItems(): number{
    return this.cartService.getCartItems().length
  }
}
