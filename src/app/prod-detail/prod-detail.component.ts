import { Component, OnInit } from '@angular/core';
import { Product, ProductDomain } from './../models/product';
import { Data } from './../data/data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.scss']
})
export class ProdDetailComponent implements OnInit {

  private mainProducts: ProductDomain[];

  constructor(private route: ActivatedRoute) {
    this.mainProducts = new Data().mainProducts;
   }
  mainProduct: Product;
  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = +this.route.snapshot.paramMap.get('prodId');
      const subId = +this.route.snapshot.paramMap.get('subId');
      this.mainProduct = this.mainProducts.find(p => p.id == id).products.find(p => p.id == subId);
    })
  }

}
