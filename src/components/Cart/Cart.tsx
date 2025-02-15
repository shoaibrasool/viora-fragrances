import { RiCloseLine } from "react-icons/ri";
import { useEffect, useRef } from "react";
import styles from "./Cart.module.css";
import { CartProps } from "../../types/cartTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store/store";
import CartProduct from "../CartProduct/CartProduct";
import { useNavigate } from "react-router";

function Cart({ open, toggleCart }: CartProps) {
  const cartRef = useRef<HTMLDivElement>(null);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const naviate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target as Node) &&
        open
      ) {
        toggleCart();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, toggleCart]);

  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * 1000;
    return acc + price * item.count;
  }, 0);

  const handleGoToCheckout = () => {
    toggleCart();
    naviate("checkout");
  };

  return (
    <>
      <div
        ref={cartRef}
        className={`${styles.cart} ${open ? styles.open : ""}`}
      >
        <div className={styles.cartHeader}>
          <button className={styles.closeButton} onClick={toggleCart}>
            <RiCloseLine />
          </button>
        </div>
        <div className={styles.cartBottomDiv}>
          <div className={styles.cartItemsDiv}>
            <div className={styles.freeShipping}>
              <p>
                Congrats! You're eligible for <strong>FREE SHIPPING.</strong>
              </p>
            </div>
            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <CartProduct key={item.id} product={item} />
              ))}
            </div>
          </div>
          {cartItems.length > 0 && (
            <div className={styles.totalDiv}>
              <div className={styles.totalContainer}>
                <span className={styles.totalText}>Subtotal:</span>
                <span className={styles.total}> Rs.{total.toFixed(2)}</span>
              </div>
              <p className={styles.taxes}>
                Taxes & Shipping calculated at checkout
              </p>
              <div className={styles.checkoutDiv}>
                <button
                  className={styles.checkout}
                  onClick={handleGoToCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
