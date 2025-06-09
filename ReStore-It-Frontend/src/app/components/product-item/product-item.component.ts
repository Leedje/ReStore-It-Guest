import { Component,  Input } from '@angular/core';
import { ProductDTO } from '../../dtos/productDTO';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cartService/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @Input() product: ProductDTO = new ProductDTO();

  constructor(private cartService: CartService, private router: Router){}

  addToCart() {
    this.cartService.addToCart(this.product)
  }

  viewProduct(): void {
    this.router.navigate(['', this.product.name, this.product.id]);
  }

}
