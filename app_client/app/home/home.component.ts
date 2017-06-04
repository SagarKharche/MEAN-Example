import { Component, OnInit } from '@angular/core';

/* Importing Services */
import { ProductsService } from '../service/products.service'

@Component({
  selector: 'digi-home',
  templateUrl: 'app/home/home.component.html'
})

export class HomeComponent implements OnInit {
  public products: any[] = [];
  public constructor(
    private productsService: ProductsService
  ) { }

  public ngOnInit() { 
    this.productsService.getAllProducts().subscribe((response) => {
      this.products = response;
    })
  }
}