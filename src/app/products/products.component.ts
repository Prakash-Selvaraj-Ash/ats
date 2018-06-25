import { Component, OnInit } from '@angular/core';
import { Product, ProductDomain } from './../models/product';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  private KjellbergDescription1: string = "With just a few settings the new plasma cutting units of the Smart Focus series achieve excellent results in the cutting range from 1 to 100 mm. Even under challenging conditions highest cutting quality and speed are realised. Therefore we use our proven cutting technologies as for example Contour Cut for cutting mild steel. The optimised gas control units and torches protect the consumables, reduce the gas consumption and the costs per cutting metre.";

  private pugCuttingProduct1: Product  = { description: "Pug cutting description", image: "./../assets/arev.jpg" }

  private consumablesProduct1: Product = { description: "Consumables description", image: "./../assets/B&Bartoni/BB consumablea.jpg" }
  private consumablesProduct2: Product = { description: "Consumables description", image: "./../assets/B&Bartoni/B&B Silver plus electrode.jpg" }
  private consumablesProduct3: Product = { description: "Consumables description", image: "./../assets/B&Bartoni/Gas nozzle.jpg" }
  private consumablesProduct4: Product = { description: "Consumables description", image: "./../assets/B&Bartoni/B&B consumable1.jpg" }

  private cncProduct1: Product = { description: "CNC cutting description", image: "./../assets/cnc.jpg" }
  private cncProduct2: Product = { description: "CNC cutting description", image: "./../assets/CNC4.jpg" }

  private kjellbergProduct1: Product = { description: this.KjellbergDescription1, image: "./../assets/Kjellberg/Smart-Focus.jpg" }


  mainProduct: ProductDomain = null;

  private mainProducts: ProductDomain[] = [
    { id: 0, name: "Pug Cutting", isLogoAvailable: true, logoImage: "./../assets/AREV-Logo.png", products: [this.pugCuttingProduct1] },
    { id: 1, name: "Consumables", isLogoAvailable: true, logoImage: "./../assets/B&Bartoni/B&B Logo.jpg", products: [this.consumablesProduct1, this.consumablesProduct2, this.consumablesProduct3, this.consumablesProduct4] },
    { id: 2, name: "CNC Profile Cutting Machine", isLogoAvailable: true, logoImage: "./../assets/AREV-Logo.png", products: [this.cncProduct1, this.cncProduct2] },
    { id: 3, name: "Cutting Machine Plasma", isLogoAvailable: true, logoImage: "./../assets/Kjellberg/Logo.png", products: [this.kjellbergProduct1] }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(param => {
      const id = +this.route.snapshot.paramMap.get('id');
      this.mainProduct = this.mainProducts.find(p => p.id == id);
    })
  }



}
