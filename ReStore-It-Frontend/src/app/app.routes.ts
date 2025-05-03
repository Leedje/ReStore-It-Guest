import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/Products/products/products.component';
import { ProductDetailsComponent } from './pages/Products/product-details/product-details.component';
import { CreateProductComponent } from './pages/Products/create-product/create-product.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent}, //change to home component when I create one for the browse
  { path: "products", component: ProductsComponent },
  { path: "products/create", component: CreateProductComponent, pathMatch: 'full' },
  { path: "products/:id", component: ProductDetailsComponent, pathMatch: 'full' },
  { path: "products/edit/:id", component: ProductsComponent, pathMatch: "full"}
];
