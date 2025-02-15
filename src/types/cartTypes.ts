export interface CartProps {
  open: boolean;
  toggleCart: () => void;
}

export interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  count: number;
}

export interface CartproductProps {
  product: CartItem;
}
