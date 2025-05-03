import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../../../services/productService/product.service';
import { ProductDTO } from '../../../dtos/productDTO';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../services/categoryService/category.service';
import { CategoryDTO } from '../../../dtos/categoryDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {

  displayNotification: boolean = false;

  isDropdownOpen: boolean = false;
  selectedCategory: any = null;

  product: ProductDTO = {
    id: '',
    name: '',
    description:'-',
    size: '',
    price: 1.00,
    numberOfProducts: 1,
    categories: []
  };

  categories: CategoryDTO[] = [];

  constructor(private router: Router, private productService: ProductService, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.GetAllCategories().subscribe((response: CategoryDTO[]) => {
      this.categories = response
    });
  }

  CreateProduct(product: ProductDTO) {
    this.productService.CreateProduct(product).subscribe((response) => {
      product = response;

      this.router.navigate(["/products"]);
      //if product successfully created, reroute and display success dialogue
    },
      (error) => {
        //if not stay on the same page and give an error dialogue
        console.error(error);
      }
    );
  }

  toggleDropdown(): void{
    this.isDropdownOpen = !this.isDropdownOpen
  }

  selectCategory(event: any): void {
    const selectedCategory = this.categories.find(category => category.name === event.target.value);
    if (selectedCategory && !this.product.categories.includes(selectedCategory)) {
      this.product.categories.push(selectedCategory);
    }

  }

  removeCategory(selectCategory: CategoryDTO): void {
    this.product.categories = this.product.categories.filter(category => category !== selectCategory);
  }

}
