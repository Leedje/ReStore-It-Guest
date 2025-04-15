import { Routes } from '@angular/router';
import {ProductsComponent} from '../pages/Products/products/products.component';
import {ProductDetailsComponent} from '../pages/Products/product-details/product-details.component';

export const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: "full"},
  {path:"/products", component: ProductsComponent},
  {path:"/product/:id", component:ProductDetailsComponent}
];
