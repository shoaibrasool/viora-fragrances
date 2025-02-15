import ProductSlide from "../../components/ProductSlide/ProductSlide";
import styles from "./Catalog.module.css";
import { Product } from "../../types/productTypes";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store/store";

function Catalog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const products: Product[] = useSelector(
    (state: RootState) => state.product.products
  );

  return (
    <div className={styles.mainDiv}>
      <div className={styles.innerDiv}>
        <p className={styles.heading}>Products</p>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <ProductSlide product={product} />
            </div>
          ))}
        </div>
        <div className={styles.gridInfoOuterDiv}>
          <div className={styles.gridInfo}>Showing 10 of 10 products</div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
