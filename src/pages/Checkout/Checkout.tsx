import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store/store";
import styles from "./Checkout.module.css";
import { placeOrder } from "../../services/orderService";
import { useNavigate } from "react-router";
import { EmailParams } from "../../types/emailTypes";
import { sendOrderEmail } from "../../services/emailService";
import { emptyCart } from "../../state/cartSlice/cartSlice";

function Checkout() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const totalAmount = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * 1000;
    return acc + price * item.count;
  }, 0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      ...formData,
      cartItems,
      totalAmount,
      orderDate: new Date().toISOString(),
    };

    try {
      const orderId = await placeOrder(orderData);
      console.log("Order placed with ID: ", orderId);

      const cart_items = cartItems
        .map((item) => `<li>${item.name} - ${item.price} x ${item.count}</li>`)
        .join("");

      const emailParams: EmailParams = {
        to_name: formData.name,
        to_email: formData.email,
        order_id: orderId,
        order_date: orderData.orderDate,
        total_amount: totalAmount.toFixed(2),
        cart_items,
      };
      await sendOrderEmail(emailParams);

      clearFormAndCart();
      window.alert("Order placed successfully! Email has been sent to you.");
      navigate("/");
    } catch (error) {
      console.error("Error placing order: ", error);
    } finally {
      setLoading(false);
    }
  };

  const clearFormAndCart = () => {
    setFormData({
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      postalCode: "",
    });
    dispatch(emptyCart());
  };

  return (
    <div className={`${styles.checkout} ${loading ? styles.loading : ""}`}>
      <h1 className={styles.heading}>Checkout</h1>
      <div className={styles.checkoutContainer}>
        <div className={styles.cartSummary}>
          <h2>Order Summary</h2>
          <ul className={styles.cartItems}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.cartItemImage}
                />
                <div className={styles.cartItemDetails}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>
                    {item.price} x {item.count}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.totalAmount}>
            <p>Total Amount: Rs.{totalAmount.toFixed(2)}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.checkoutForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className={styles.placeOrderButton}
            disabled={loading}
          >
            {loading
              ? "Placing Order..."
              : `Place Order (Rs.${totalAmount.toFixed(2)})`}
          </button>
        </form>
        {loading && (
          <div className={styles.loadingOverlay}>Processing your order...</div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
