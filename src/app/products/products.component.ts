import { Component, OnInit } from '@angular/core';
import { Product, ProductDomain } from './../models/product';
import { Data } from './../data/data';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  mainProduct: ProductDomain = null;
  mainProducts: ProductDomain[];
  constructor(private route: ActivatedRoute) { 
    this.mainProducts = new Data().mainProducts;
  }

  ngOnInit() {

    this.route.params.subscribe(param => {
      const id = +this.route.snapshot.paramMap.get('id');
      this.mainProduct = this.mainProducts.find(p => p.id == id);
    })
  }
}
