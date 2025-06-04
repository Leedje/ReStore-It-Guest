import { Injectable } from '@angular/core';
import { ProductDTO } from '../../dtos/productDTO';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: ProductDTO[] = []

  constructor() { }

  saveCart() {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(product: ProductDTO): void{
    this.cart.push(product);
    this.saveCart();
  }

  removeItem(selectedProduct: string): void{
    this.cart = this.cart.filter(product => product.id != selectedProduct);
    this.saveCart();
  }

  getCartItems(): ProductDTO[]{
    const savedCart = sessionStorage.getItem('cart');
    this.cart = savedCart ? JSON.parse(savedCart) : [];
    return this.cart;
  }

  clearCart(): void{
    this.cart = [];
    this.saveCart();
  }

  calculateCartTotal(): number{
    return this.cart.reduce((total, product) => total + product.price, 0)
  }
}
