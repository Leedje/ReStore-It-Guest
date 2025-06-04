import { Component, OnInit } from '@angular/core';
import { ProductDTO } from '../../../../../dtos/productDTO';
import { Router } from '@angular/router';
import { ProductItemComponent } from "../../../../../components/product-item/product-item.component";
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../../services/cartService/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-order',
  imports: [CommonModule],
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.css'
})
export class ViewOrderComponent implements OnInit{

  cartProducts: ProductDTO[] = []

  constructor(private router: Router, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartItems();
  }

  proceedToCheckout(): void {
    this.router.navigate(['/checkout'])
  }

  removeItem(productId: string): void{
    this.cartService.removeItem(productId);
    this.cartProducts = this.cartService.getCartItems();
    console.log("removing product: " ,productId);
  }

  displayTotalPrice(): number{
    return this.cartService.calculateCartTotal();
  }



}
