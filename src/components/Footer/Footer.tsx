import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.outer_div}>
        <div className={styles.innder_div}>
          <p className={styles.brand}>VIORA Fragrances</p>
          <p className={styles.slogan}>Where Scents Meet Artistry..</p>
          <div className={styles.description}>+923298742733</div>
          <div className={styles.description}>Viorafragrances1@gmail.com</div>
        </div>
      </div>
      <p className={styles.copyright}>
        © 2025 VIORA Frances. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
