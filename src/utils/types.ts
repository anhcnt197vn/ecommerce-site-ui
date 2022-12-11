export type Slide = {
  id: number;
  imageUrl: string;
};

export type Product = {
  id: number;
  productName: string;
  price: number;
  oldPrice: number;
  sizes: string[];
  colors: string[];
};
