import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../../services/orderService/order.service';
import { OrderDTO } from '../../../../../dtos/orderDTO';
import { ErrorNotificationComponent } from "../../../../../components/error-notification/error-notification.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../../../services/cartService/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-order',
  imports: [ErrorNotificationComponent, CommonModule, FormsModule],
  templateUrl: './checkout-order.component.html',
  styleUrl: './checkout-order.component.css'
})

export class CheckoutOrderComponent implements OnInit{

  displayError: boolean = false;
  displaySuccess: boolean = false;
  order: OrderDTO = new OrderDTO();

  constructor(private orderService: OrderService, private cartService: CartService, private router: Router){
  }

  ngOnInit(): void {
    this.order.products = this.cartService.getCartItems();
  }

  // I need to debug this n remove cart item
  submitOrder(){
    console.log("submitting order");
    this.orderService.SubmitOrder(this.order).subscribe((response) => {
      if (response.status == 201 || response.status == 200){
        this.displaySuccess = true;
        this.cartService.clearCart();
        sessionStorage.setItem('orderId', response.body);
        this.router.navigate(['/order-placed']);
      }
    }, (error) => {
      console.error("An error occured while submitting order: ", error)
      this.displayError = true;
    })
    console.log("order has been submitted. Firstname is: ", this.order);
  }

}
