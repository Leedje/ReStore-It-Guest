import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../../services/productService/product.service';
import { ProductDTO } from '../../../../dtos/productDTO';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../../../../components/product-item/product-item.component';


@Component({
  selector: 'app-guest-home',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './guest-home.component.html',
  styleUrl: './guest-home.component.css'
})
export class GuestHomeComponent implements OnInit {

  products: ProductDTO [] = []
  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe((response) => {
      this.products = response.body
    },
    (error) => {
      //Display error notification
    }
  );
  }

  viewProduct(name: String, id: String): void {
    this.router.navigate(['', name, id]);
  }
}
