import { CartItem } from "./cartTypes";

export interface OrderData {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  postalCode: string;
  cartItems: CartItem[];
  totalAmount: number;
  orderDate: string;
}
