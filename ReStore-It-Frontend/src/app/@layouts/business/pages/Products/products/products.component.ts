import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../services/productService/product.service';
import { ProductDTO } from '../../../../../dtos/productDTO';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfirmDialogueComponent } from '../../../../../components/confirm-dialogue/confirm-dialogue.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ConfirmDialogueComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  public showConfirmDialogue: boolean = false;
  private productToDelete: String | null = null;

  public products: ProductDTO[] = [];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.GetAllProducts().subscribe((response: ProductDTO[]) => {
      this.products = response;
    })
  }

  navigateToCreateProducts() {
    this.router.navigate(['/business/products/create']);
  }

  navigateToProductDetails(productId: String) {
    this.router.navigate(["/business/products", productId]);
  }

  navigateToEditProduct(productId: String) {
    this.router.navigate(["/business/products/edit", productId]);
  }

  openConfirmDialogue(productId: String) {
    this.showConfirmDialogue = true;
    this.productToDelete = productId;
  }

  handleDialogResponse(response: boolean) {
    this.showConfirmDialogue = false;

    if (response && this.productToDelete) {
      this.DeleteProduct(this.productToDelete);
    }
  }

  DeleteProduct(id: String) {
    console.log("deleting product", id)
    this.productService.DeleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id != id)
    }, (error) => {
      console.error("An error occured while deleting the product: ", error)
      //display error-notificatiom component
    });
  }
}

