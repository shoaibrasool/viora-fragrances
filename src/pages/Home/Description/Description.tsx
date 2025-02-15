import styles from "./Description.module.css";

function Description() {
  return (
    <>
      <div className={styles.outer_div}>
        <div>
          <p className={styles.top_text}>WHY VIORA?</p>
        </div>
        <div>
          <p className={styles.middle_text}>
            Because our products are proudly made in Pakistan with:
          </p>
        </div>
        <div className={styles.bottom_text_div}>
          <span>&#10003; Premium Ingredients</span>
          <span>&#10003; More than 18 hours Lasting scent</span>
          <span>&#10003; Sustainable Partices</span>
        </div>
      </div>
      <p className={styles.exclusivity}>The Exclusivity..</p>
    </>
  );
}

export default Description;
