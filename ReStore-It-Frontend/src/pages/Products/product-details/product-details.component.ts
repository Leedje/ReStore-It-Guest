import {Component, OnInit} from '@angular/core';
import {ProductDTO} from '../../../app/dtos/productDTO';
import {ProductService} from '../../../app/services/productService/product.service';
import {producerAccessed} from '@angular/core/primitives/signals';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  constructor(private productService: ProductService) {
  }

  async ngOnInit(){
    const ProductDetails = await this.productService.GetProductDetails("").toPromise() //remove empty string
  }


}
