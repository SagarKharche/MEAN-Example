import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/* Importing Services */
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'product-details',
  templateUrl: 'app/home/product-details/product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
  public productId: string;
  public productDetails: any = {};
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.activatedRoute.params.subscribe((response) => {
      this.productId = response['id'];
      if (this.productId) {
        this.getProductDetails();
      }
    });
    
  }

  public getProductDetails(): void {
    this.productsService.getProductDetails(this.productId).subscribe((response) => {
      this.productDetails = response;
    });
  }
}