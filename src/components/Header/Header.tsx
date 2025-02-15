import styles from "./Header.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store/store";
import { useNavigate } from "react-router";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const cartCount = useSelector(
    (state: RootState) => state.cart.cartItems.length
  );

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.top_outer_div}>
        <div className={styles.top_inner_div}>
          <div className={styles.left_div}>
            <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
            <FaBars className={styles.burger_menu} onClick={toggleSidebar} />
            Menu
          </div>
          <div className={styles.center_div}>
            <img
              className={styles.logo}
              src="logo.avif"
              alt="logo"
              onClick={navigateToHome}
            />
          </div>
          <div className={styles.right_div}>
            <Cart open={cartOpen} toggleCart={toggleCart} />
            <FaShoppingCart className={styles.cart_icon} onClick={toggleCart} />
            <div className={styles.cart_num}>{cartCount}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
