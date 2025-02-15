import { ProductSlideProps } from "../../types/productTypes";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "./CustomArrows";
import styles from "./ProductSlide.module.css";
import { useNavigate } from "react-router";
import { addItem } from "../../state/cartSlice/cartSlice";
import { useDispatch } from "react-redux";

function ProductSlide({ product }: ProductSlideProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.newPrice,
        image: product.images[0],
        count: 1,
      })
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
  };

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className={styles.productSlide}>
      <div className={styles.imageContainer}>
        <Slider {...settings}>
          <img
            className={styles.image}
            src={product.images[0]}
            alt={product.name}
            onClick={handleNavigate}
          />
          <img
            className={styles.image}
            src={product.images[1]}
            alt={product.name}
            onClick={handleNavigate}
          />
        </Slider>
      </div>
      <p className={styles.productName}>{product.name}</p>
      <div className={styles.priceContainer}>
        <span className={styles.oldPrice}>{product.oldPrice}</span>
        <span className={styles.newPrice}>From {product.newPrice}</span>
      </div>
      <button className={styles.addToCartDiv} onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductSlide;
