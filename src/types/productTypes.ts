export interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  images: string[];
}

export interface ProductSlideProps {
  product: Product;
}