import styles from "./ProductSlide.module.css";

import { MouseEventHandler } from "react";

export const PrevArrow = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className={styles.prevBtn}>
      <span>&lt;</span>
    </button>
  );
};

export const NextArrow = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className={styles.nextBtn}>
      <span>&gt;</span>
    </button>
  );
};
