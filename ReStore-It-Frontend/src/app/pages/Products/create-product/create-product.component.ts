import { Component } from '@angular/core';
import { ProductService } from '../../../services/productService/product.service';
import { ProductDTO } from '../../../dtos/productDTO';

@Component({
  selector: 'app-create-product',
  imports: [],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  public product: Partial<ProductDTO> = {};
  constructor(private productService: ProductService){
  }

  //This is for get... if I'm POST-ing/creating I won't exactly receive the product object...
  CreateProduct(product: ProductDTO){
    this.productService.CreateProduct(product).subscribe(response => {
    product = response;
    })

    //if product successfully created, reroute and display success dialogue, if not stay on the same page and give an error dialogue
  }

}
