import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store/store";
import styles from "./ProductDetails.module.css";
import { addItem } from "../../state/cartSlice/cartSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) =>
    state.product.products.find((p) => p.id === productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.newPrice,
        image: `/${product.images[0]}`,
        count: 1,
      })
    );
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.imageContainer}>
        <img src={`/${product.images[0]}`} alt={product.name} />
      </div>
      <div className={styles.detailsContainer}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.oldPrice}>Old Price: {product.oldPrice}</p>
        <p className={styles.newPrice}>New Price: {product.newPrice}</p>
        <p className={styles.description}>
          This is a high-quality product that offers exceptional value for
          money. It features a sleek design and is made from durable materials,
          ensuring long-lasting performance. Whether you're using it for
          personal or professional purposes, this product is sure to meet your
          needs and exceed your expectations. Don't miss out on this fantastic
          opportunity to own a top-of-the-line product at an unbeatable price.
        </p>
        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
