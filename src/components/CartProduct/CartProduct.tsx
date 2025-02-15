import { CartproductProps } from "../../types/cartTypes";
import styles from "./CartProduct.module.css";
import { FaTrash } from "react-icons/fa";
import {
  increaseCount,
  decreaseCount,
  removeItem,
} from "../../state/cartSlice/cartSlice";
import { useDispatch } from "react-redux";

function CartProduct({ product }: CartproductProps) {
  const dispatch = useDispatch();
  const handleIncreaseCount = () => {
    dispatch(increaseCount(product.id));
  };

  const handleDecreaseCount = () => {
    dispatch(decreaseCount(product.id));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.imgDiv}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImg}
        />
      </div>
      <div className={styles.productDetails}>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productPrice}>{product.price}</p>
        <div className={styles.productCountOuterDiv}>
          <div className={styles.productCountDiv}>
            <div className={styles.countBtn} onClick={handleDecreaseCount}>
              -
            </div>
            <div className={styles.count}>{product.count}</div>
            <div className={styles.countBtn} onClick={handleIncreaseCount}>
              +
            </div>
          </div>
          <div className={styles.removeBtnDiv} onClick={handleRemoveItem}>
            <FaTrash className={styles.removeIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
