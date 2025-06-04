import { Component, OnInit } from '@angular/core';
import { ProductDTO } from '../../../../dtos/productDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../services/productService/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guest-product-page',
  imports: [CommonModule],
  templateUrl: './guest-product-page.component.html',
  styleUrl: './guest-product-page.component.css'
})
export class GuestProductPageComponent implements OnInit {

  product: Partial<ProductDTO> = {};

  constructor(private productService: ProductService, private router: Router, private urlRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.urlRoute.snapshot.paramMap.get('id');

    if (id) {
      this.productService.GetProductByID(id).subscribe((response) => {
        this.product = response
      });
    }
    else{
      //display not found page
    }
  }

  addToCart(product: ProductDTO): void {

    //Add to the cart

  }

  buyNow(product: ProductDTO): void {

  }
}
