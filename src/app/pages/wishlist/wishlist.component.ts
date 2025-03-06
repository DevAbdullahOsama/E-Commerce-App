import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist/wishlist.service';
import { Iwishlist } from '../../shared/interfaces/iwishlist';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  imports: [CurrencyPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
 private readonly wishlistSerivce = inject(WishlistService);
 wishlistProdust:Iwishlist[] = [];

 ngOnInit(): void {
  this.addProductToWishlist();
 }

  addProductToWishlist(){
    this.wishlistSerivce.getLoggedUserWishlist().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.wishlistProdust = res.data;
      }
    })
  }

  removeItemFromWishlist(id:string){
    this.wishlistSerivce.removeProductFromWishlist(id).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.addProductToWishlist();
      }
    })
  }

}
