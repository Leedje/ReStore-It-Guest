import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../app/services/productService/product.service';
import {ProductDTO} from '../../../app/dtos/productDTO';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  public products:any=[];
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.GetAllProducts().subscribe((response: ProductDTO[])=>{
      this.products = response;
    })
  }


}

