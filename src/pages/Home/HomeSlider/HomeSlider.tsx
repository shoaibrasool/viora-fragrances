import ProductSlide from "../../../components/ProductSlide/ProductSlide";
import { Product } from "../../../types/productTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store/store";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomeSlider.module.css";

function HomeSlider() {
  const products: Product[] = useSelector((state: RootState) =>
    state.product.products.slice(0, 4)
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {products.map((product) => (
            <ProductSlide key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeSlider;
