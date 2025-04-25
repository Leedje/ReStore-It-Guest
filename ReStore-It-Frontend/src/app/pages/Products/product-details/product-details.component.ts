import { Component, OnInit, Optional } from '@angular/core';
import { ProductDTO } from '../../../dtos/productDTO';
import { ProductService } from '../../../services/productService/product.service';
import { producerAccessed } from '@angular/core/primitives/signals';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  public product: Partial<ProductDTO> = {};

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.GetProductByID(id).subscribe((response: Partial<ProductDTO>) => {
        this.product = response;
      },
        (error) => {
          console.error(error)
        });
    }
    else {
      console.error("No product ID found in route.")
    }
  }
}
