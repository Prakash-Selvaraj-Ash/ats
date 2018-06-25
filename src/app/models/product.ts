export class ProductDomain {
    id: number;
    name: string;
    isLogoAvailable: boolean;
    logoImage: string;
    products: Product[];
  }

  export class Product{
    description: string;
    image: string;
  }