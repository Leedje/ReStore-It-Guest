import { Component,  Input } from '@angular/core';
import { ProductDTO } from '../../dtos/productDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @Input() product: Partial<ProductDTO> = {}
  constructor(){}

  addToCart() {
    //Add logic later
  }
}
