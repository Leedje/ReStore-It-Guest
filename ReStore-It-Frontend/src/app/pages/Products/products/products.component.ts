import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/productService/product.service';
import { ProductDTO } from '../../../dtos/productDTO';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  private readonly router = inject(Router);

  public products: any = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.GetAllProducts().subscribe((response: ProductDTO[]) => {
      this.products = response;
    })
  }

  navigateToCreateProducts(){
    this.router.navigate(['/products/create']);
  }

  navigateToProductDetails(productId: String){
    this.router.navigate(['/products', {id: productId}]);
  }

  DeleteProduct(id: string){
    this.productService.DeleteProduct(id);
  }
}

