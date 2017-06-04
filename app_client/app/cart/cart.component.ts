import { Component, OnInit } from '@angular/core';

/* Importing Services */
import { ProductsService } from '../service/products.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'cart',
  templateUrl: 'app/cart/cart.component.html'
})

export class CartComponent implements OnInit {
  public customerId: string;
  public productDetails: any;
  constructor(
    private productsService: ProductsService,
    private sessionService: SessionService
  ) { }

  public ngOnInit() {
    this.customerId = this.sessionService.getUserDetails()._id;
    this.productsService.getAllCartDetails(this.customerId).subscribe((response) => {
      this.productDetails = response;
    })
  }
}