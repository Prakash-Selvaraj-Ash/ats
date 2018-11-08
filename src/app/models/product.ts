export class ProductDomain {
    id: number;
    name: string;
    isLogoAvailable: boolean;
    logoImage: string;
    products: Product[];
  }

  export class kvp{
    key: string;
    value: string;
  }

  export class Product{
    id: number;
    name: string;
    description: string;
    image: string;
    descripions: kvp[];
    otherDetails: string[];
  }