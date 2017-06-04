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
    console.log(id);
    return this.http.get('http://localhost:3000/api/product/' + id, this.authenticationService.createAuthHeader()).map(res => res.json());
  }
}