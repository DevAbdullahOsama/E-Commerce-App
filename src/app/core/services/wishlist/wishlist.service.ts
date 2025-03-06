import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpClient:HttpClient) { }

  addProductToWishlist(id:string):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/api/v1/wishlist`,
      {
        "productId":id
      },
      {
        headers:{
          "token":localStorage.getItem('userToken')!,
        },
      },
    );
  }

  removeProductFromWishlist(id:string):Observable<any>{
    return this.httpClient.delete(`${environment.baseUrl}/api/v1/wishlist/${id}`,
      {
        headers:{
          "token":localStorage.getItem('userToken')!,
        },
      },
    )
  }

  getLoggedUserWishlist():Observable<any>{
    return this.httpClient.get(`${environment.baseUrl}/api/v1/wishlist`,
      {
      headers:{
        "token":localStorage.getItem('userToken')!,
      },
    })
    }



}
