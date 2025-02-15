export interface EmailParams {
  [key: string]: unknown;
  to_name: string;
  to_email: string;
  order_id: string;
  order_date: string;
  total_amount: string;
  cart_items: string;
}
