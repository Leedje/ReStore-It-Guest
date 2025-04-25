import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/productService/product.service';
import { ProductDTO } from '../../../dtos/productDTO';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  public products: any = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.GetAllProducts().subscribe((response: ProductDTO[]) => {
      this.products = response;
    })
  }

  //See which lifehook I need to use for when I click on a button, the delete executes
  DeleteProduct(id: string){
    this.productService.DeleteProduct(id);
  }
}

