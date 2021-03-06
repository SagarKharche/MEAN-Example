import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

/* Impoerting Service */
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class ProductsService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }

  public getAllProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/api/products', this.authenticationService.createAuthHeader()).map(res => res.json());
  }

  public getProductDetails(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/api/product/' + id, this.authenticationService.createAuthHeader()).map(res => res.json());
  }

  public addProductToCart(params: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/product/' + params.product.productId + '/cart/' + params.customerId, params , this.authenticationService.createAuthHeader()).map(res => res.json());
  }

  public getAllCartDetails(customerId: string): Observable<any> {
    return this.http.get('http://localhost:3000/api/product/cart/' + customerId, this.authenticationService.createAuthHeader()).map(res => res.json());
  }
}