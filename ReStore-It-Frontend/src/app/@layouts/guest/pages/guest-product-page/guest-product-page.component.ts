import { Component, OnInit } from '@angular/core';
import { ProductDTO } from '../../../../dtos/productDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../services/productService/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../services/cartService/cart.service';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guest-product-page',
  imports: [CommonModule],
  templateUrl: './guest-product-page.component.html',
  styleUrl: './guest-product-page.component.css'
})
export class GuestProductPageComponent implements OnInit {

  product: ProductDTO = new ProductDTO();

  constructor(private productService: ProductService, private router: Router, private urlRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const id = this.urlRoute.snapshot.paramMap.get('id');

    if (id) {
      this.productService.GetProductByID(id).subscribe((response) => {
        this.product = response.body
      });
    }
    else{
      //display not found page
    }
  }

  addToCart(): void {
    console.log("adding product: ", this.product)
    this.cartService.addToCart(this.product);
  }

  buyNow(): void {
    this.addToCart();
    console.log("adding product for immediate purchage: ", this.product)
    this.router.navigate(['/order']);
  }
}
