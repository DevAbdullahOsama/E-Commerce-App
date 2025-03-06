import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { TermtextPipe } from '../../shared/pipes/termtext.pipe';
import { CartService } from '../../core/services/cart/cart.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [TermtextPipe,FormsModule,RouterLink,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly cartService = inject(CartService);
  products:Iproduct[] = [];

  ngOnInit(): void {
    this.getAllProductsData();
  }

  getAllProductsData():void{
    this.productsService.getAllProducts().subscribe({
      next:(res)=>{
        this.products = res.data;
      }
    })
  }

  addToCart(id:string):void{
    
    this.cartService.addProductToCart(id).subscribe({
      next:(res)=>{
        this.cartService.cartNumber.set(res.numOfCartItems);
      }
    });
  }

}
